import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import CustomNavbar from '../components/CustomNavbar';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.error('No such document!');
        }
        setLoading(false); // Stop loading when post is fetched
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="blog-detail-loading">Loading...</p>; // Show loading while fetching the post

  if (!post) return <p className="blog-detail-error">No post found.</p>; // Show error if no post found

  return (
    <>
      <CustomNavbar />
      <div className="blog-detail-container">
        <h1 className="blog-detail-title">{post.title}</h1>

        {/* Blog publish date */}
        {post.createdAt && (
          <p className="blog-detail-date">
            Veröffentlicht am: {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
          </p>
        )}

        {/* Display blog image */}
        {post.imageUrl && post.imageUrl !== '' && (
          <img src={post.imageUrl} alt={post.title} className="blog-detail-image" />
        )}

        <div className="blog-detail-content">
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
