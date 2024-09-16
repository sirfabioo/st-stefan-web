import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            {/* Clicking the headline redirects to blog detail page */}
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          {/* Clicking the image also redirects to blog detail page */}
          {post.imageUrl && post.imageUrl !== '' && (
            <Link to={`/blog/${post.id}`}>
              <img src={post.imageUrl} alt={post.title} width="300" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogOverview;
