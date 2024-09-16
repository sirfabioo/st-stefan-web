import React, { useState, useEffect } from 'react';
import { db, storage, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth'; // Firebase auth observer
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null); // Track the logged-in user

  const navigate = useNavigate();

  // Check for authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set logged-in user
      } else {
        setUser(null);
        navigate('/login'); // Redirect to login if not authenticated
        // Give an alert "You need to be logged in to create a blog post"
        alert('You need to be logged in to create a blog post');
      }
    });
    return unsubscribe; // Clean up the observer on component unmount
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Title and content are required');
      return;
    }

    if (!image) {
      // Submit without image
      try {
        await addDoc(collection(db, 'blogPosts'), {
          title,
          content,
          imageUrl: '',
          createdAt: serverTimestamp(),
        });
        setTitle('');
        setContent('');
        setImage(null);
        setProgress(0);
      } catch (error) {
        console.error('Error adding blog post:', error);
      }
    } else {
      // Submit with image upload
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
          try {
            await addDoc(collection(db, 'blogPosts'), {
              title,
              content,
              imageUrl,
              createdAt: serverTimestamp(),
            });
            setTitle('');
            setContent('');
            setImage(null);
            setProgress(0);
          } catch (error) {
            console.error('Error adding blog post:', error);
          }
        }
      );
    }
  };

  // If the user is not logged in, show nothing or a loading message
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
      {progress > 0 && <p>Uploading: {progress}%</p>}
    </div>
  );
};

export default Blog;
