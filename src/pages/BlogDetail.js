import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null);

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
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>; // Show loading while fetching the post

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.imageUrl && post.imageUrl !== '' && (
        <img src={post.imageUrl} alt={post.title} width="300" />
      )}
    </div>
  );
};

export default BlogDetail;
