import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/CarouselComponent.css';

const CarouselComponent = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const q = query(collection(db, 'galleryImages'), orderBy('uploadedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const images = querySnapshot.docs.map((doc) => doc.data());
      setGalleryImages(images);
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="carousel-container">
      {galleryImages.length > 0 ? (
        <Carousel interval={3000} fade>
          {galleryImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block carousel-image"
                src={image.imageUrl}  // Assuming images have the "imageUrl" field
                alt={`Slide ${index + 1}`}
              />
              {image.caption && (
                <Carousel.Caption>
                  <p>{image.caption}</p>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default CarouselComponent;
