import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/ClassOverview.css';
import CustomNavbar from '../components/CustomNavbar';

const ClassOverview = () => {
  const [classes, setClasses] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      const q = query(collection(db, 'classes'), orderBy('createdAt', 'desc'));  // Still fetch classes from Firestore
      const querySnapshot = await getDocs(q);
      let classList = querySnapshot.docs.map((doc) => doc.data());

      // Sort classes alphanumerically (e.g., 1a, 1b, 2a, etc.)
      classList = classList.sort((a, b) => sortClassesAlphanumerically(a.className, b.className));
      
      setClasses(classList);
    };

    fetchClasses();
  }, []);

  // Custom function to sort class names
  const sortClassesAlphanumerically = (classA, classB) => {
    const parseClass = (className) => {
      const numericPart = parseInt(className.match(/\d+/)); // Extract the numeric part
      const alphabeticPart = className.match(/[a-zA-Z]+/)[0]; // Extract the alphabetic part
      return { numericPart, alphabeticPart };
    };

    const classAParsed = parseClass(classA);
    const classBParsed = parseClass(classB);

    // First, compare the numeric parts
    if (classAParsed.numericPart !== classBParsed.numericPart) {
      return classAParsed.numericPart - classBParsed.numericPart;
    }

    // If numeric parts are equal, compare the alphabetic parts
    return classAParsed.alphabeticPart.localeCompare(classBParsed.alphabeticPart);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <CustomNavbar />
      <div className="class-overview-container">
        <h2 className="class-overview-heading">Klassenübersicht</h2>
        <div className="class-grid">
          {classes.map((classItem, index) => (
            <div className="class-card" key={index}>
              <p>
                <strong>Klasse:</strong> {classItem.className}
              </p>
              <p>
                <strong>Klassenvorstand:</strong> {classItem.mainTeacher}
              </p>
              {classItem.imageUrl && (
                <div className="class-image-container">
                  <img
                    src={classItem.imageUrl}
                    alt={classItem.className}
                    className="class-image"
                    onClick={() => openImageModal(classItem.imageUrl)}
                  />
                </div>
              )}
            </div>
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

export default ClassOverview;
