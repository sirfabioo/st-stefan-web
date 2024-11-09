import React, { useState, useEffect } from 'react';
import { db, storage, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, updateDoc, doc, getDocs, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import '../styles/Blog.css';
import CustomNavbar from '../components/CustomNavbar';



const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const navigate = useNavigate();

  // Check for authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/login');
        alert('You need to be logged in to create or edit a blog post');
      }
    });
    return unsubscribe;
  }, [navigate]);

  // Fetch existing blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'blogPosts'));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);

  // Handle form submission for creating or updating posts
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Title and content are required');
      return;
    }

    const postData = {
      title,
      content,
      createdAt: serverTimestamp(),
    };

    if (image) {
      const storageRef = ref(storage, `blogImages/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          postData.imageUrl = imageUrl;

          if (editingPostId) {
            await updateDoc(doc(db, 'blogPosts', editingPostId), postData);
          } else {
            await addDoc(collection(db, 'blogPosts'), postData);
          }

          resetForm();
        }
      );
    } else {
      if (editingPostId) {
        await updateDoc(doc(db, 'blogPosts', editingPostId), postData);
      } else {
        await addDoc(collection(db, 'blogPosts'), postData);
      }

      resetForm();
    }
  };

  // Reset the form after submission or canceling editing
  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setProgress(0);
    setEditingPostId(null);
  };

  // Handle clicking an existing post to edit
  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setImage(null);
    setEditingPostId(post.id);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <CustomNavbar />

    <div className="blog-container">
      <h2 className="blog-heading">{editingPostId ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
      
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="blog-input"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="blog-textarea"
        ></textarea>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="blog-file-input" />
        <button type="submit" className="blog-submit-btn">{editingPostId ? 'Update' : 'Submit'}</button>
        {editingPostId && <button type="button" onClick={resetForm} className="blog-cancel-btn">Cancel</button>}
      </form>

      {progress > 0 && <p>Uploading: {progress}%</p>}

      <h3 className="existing-posts-heading">Existing Blog Posts</h3>
      <ul className="blog-posts-list">
        {blogPosts.map((post) => (
          <li key={post.id} className="blog-post-item" onClick={() => handleEdit(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Blog;
