import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/Gallery.css';
import CustomNavbar from '../components/CustomNavbar';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For modal

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, 'galleryImages'), orderBy('uploadedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const galleryImages = querySnapshot.docs.map((doc) => doc.data());
      setImages(galleryImages);
    };

    fetchImages();
  }, []);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <CustomNavbar />
      <div className="gallery-container">
        <h2 className="gallery-heading">Bilder aus dem Schulleben</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={`Gallery ${index}`}
              className="gallery-image"
              onClick={() => openImageModal(image.imageUrl)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="image-modal-content">
              <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
