import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import '../styles/BlogOverview.css';  // Import the CSS for styling

const BlogOverview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const blogPosts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(blogPosts);
    };

    fetchPosts();
  }, []);

  // Function to truncate the blog post content to the first X characters
  const truncateContent = (content, length) => {
    return content.length > length ? `${content.substring(0, length)}...` : content;
  };

  return (
    <div>
      <div className="blog-overview-container">
        {/* Big bold headline */}
        <h1 className="blog-overview-heading">News & Events</h1>

        {/* Blog posts in a grid layout */}
        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              {/* Blog image */}
              {post.imageUrl && post.imageUrl !== '' && (
                <Link to={`/blog/${post.id}`}>
                  <img src={post.imageUrl} alt={post.title} className="blog-image" />
                </Link>
              )}
              {/* Blog title */}
              <h3 className="blog-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              {/* Blog content preview */}
              <p className="blog-excerpt">{truncateContent(post.content, 150)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default BlogOverview;
