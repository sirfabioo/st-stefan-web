import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore';
import { auth, storage, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/GalleryUpload.css';
import CustomNavbar from '../components/CustomNavbar';

const GalleryUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, 'galleryImages'), orderBy('uploadedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const galleryImages = querySnapshot.docs.map((doc) => doc.data());
      setUploadedImages(galleryImages);
    };
    fetchImages();
  }, []);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    const storageRef = ref(storage, `galleryImages/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
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
          setUploadedImages((prevImages) => [{ imageUrl }, ...prevImages]);
          setImage(null);
          setProgress(0);
        } catch (error) {
          console.error('Error saving image URL:', error);
        }
      }
    );
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <CustomNavbar />
    <div className="gallery-upload-container">
      <h2 className="gallery-upload-heading">Upload Images to Gallery</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageUpload} className="file-input" />
        <button type="submit" className="upload-button">Upload</button>
      </form>
      {progress > 0 && (
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          <span className="progress-bar-label">{progress}%</span>
        </div>
      )}
      <div className="image-grid">
        {uploadedImages.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={`Gallery ${index}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default GalleryUpload;
