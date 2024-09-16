import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, 'galleryImages'), orderBy('uploadedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const galleryImages = querySnapshot.docs.map((doc) => doc.data());
      setImages(galleryImages);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={`Gallery ${index}`}
            style={{ width: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
