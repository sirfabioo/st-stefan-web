import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const ClassOverview = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const q = query(collection(db, 'classes'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const classList = querySnapshot.docs.map((doc) => doc.data());
      setClasses(classList);
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Class List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {classes.map((classItem, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <p><strong>Class:</strong> {classItem.className}</p>
            <p><strong>Main Teacher:</strong> {classItem.mainTeacher}</p> {/* Display main teacher */}
            {classItem.imageUrl && (
              <img
                src={classItem.imageUrl}
                alt={classItem.className}
                style={{ width: '200px', marginTop: '10px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassOverview;
