import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, storage, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GalleryUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null); // Track logged-in user
  const navigate = useNavigate();

  // Check if the user is authenticated, if not redirect to login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
        alert('You need to be logged in to upload images to the gallery.');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    const storageRef = ref(storage, `gallery/${image.name}`);
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
          await addDoc(collection(db, 'galleryImages'), {
            imageUrl,
            uploadedAt: serverTimestamp(),
          });
          setImage(null);
          setProgress(0);
        } catch (error) {
          console.error('Error saving image URL:', error);
        }
      }
    );
  };

  if (!user) return <p>Loading...</p>; // Loading while checking auth

  return (
    <div>
      <h2>Upload Images to Gallery</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageUpload} />
        <button type="submit">Upload</button>
      </form>
      {progress > 0 && <p>Uploading: {progress}%</p>}
    </div>
  );
};

export default GalleryUpload;
