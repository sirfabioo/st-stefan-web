import React, { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminClasses.css';
import CustomNavbar from '../components/CustomNavbar';

const AdminClasses = () => {
  const [className, setClassName] = useState('');
  const [mainTeacher, setMainTeacher] = useState('');
  const [image, setImage] = useState(null);
  const [classes, setClasses] = useState([]);
  const [progress, setProgress] = useState(0);
  const [editingClassId, setEditingClassId] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
        alert('You need to be logged in to access the admin dashboard');
      }
    });
    return unsubscribe;
  }, [navigate]);

  // Fetch classes
  const fetchClasses = async () => {
    setLoadingMessage('Loading classes...');
    const q = query(collection(db, 'classes'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const classList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setClasses(classList);
    setLoadingMessage('');
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!className || !mainTeacher) {
      alert('Class name and main teacher are required.');
      return;
    }

    if (!image && !editingClassId) {
      alert('Image is required for new classes.');
      return;
    }

    setFeedback(editingClassId ? 'Updating class...' : 'Creating class...');
    const storageRef = ref(storage, `classImages/${image.name}`);
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
          const classData = { className, mainTeacher, imageUrl, createdAt: new Date() };
          if (editingClassId) {
            await updateDoc(doc(db, 'classes', editingClassId), classData);
            setFeedback('Class updated successfully');
          } else {
            await addDoc(collection(db, 'classes'), classData);
            setFeedback('Class created successfully');
          }
          setImage(null);
          setClassName('');
          setMainTeacher('');
          setProgress(0);
          setEditingClassId(null);
          await fetchClasses(); // Refetch classes
        } catch (error) {
          console.error('Error saving class:', error);
          setFeedback('Error saving class');
        }
      }
    );
  };

  // Handle edit
  const handleEdit = (classItem) => {
    setClassName(classItem.className);
    setMainTeacher(classItem.mainTeacher);
    setEditingClassId(classItem.id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    setFeedback('Deleting class...');
    try {
      await deleteDoc(doc(db, 'classes', id));
      setFeedback('Class deleted successfully');
      await fetchClasses(); // Refetch classes after deletion
    } catch (error) {
      console.error('Error deleting class:', error);
      setFeedback('Error deleting class');
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div className="admin-classes-container">
        <h2 className="admin-classes-heading">Manage Classes</h2>
        <form className="admin-classes-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Class Name (e.g., 1c)"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="admin-input"
          />
          <input
            type="text"
            placeholder="Main Teacher"
            value={mainTeacher}
            onChange={(e) => setMainTeacher(e.target.value)}
            className="admin-input"
          />
          <input type="file" onChange={handleImageUpload} className="admin-file-input" />
          <button type="submit" className="admin-submit-button">
            {editingClassId ? 'Update Class' : 'Add Class'}
          </button>
        </form>

        {progress > 0 && (
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
              <span className="progress-bar-text">{Math.round(progress)}%</span>
            </div>
          </div>
        )}

        {feedback && <p className="feedback-message">{feedback}</p>}
        {loadingMessage && <p className="loading-message">{loadingMessage}</p>}

        <h3 className="class-list-heading">Class List</h3>
        <div className="class-list">
          {classes.map((classItem) => (
            <div key={classItem.id} className="class-card">
              <p><strong>Class:</strong> {classItem.className}</p>
              <p><strong>Main Teacher:</strong> {classItem.mainTeacher}</p>
              {classItem.imageUrl && (
                <img src={classItem.imageUrl} alt={classItem.className} className="class-image" />
              )}
              <div className="button-group">
                <button onClick={() => handleEdit(classItem)} className="class-edit-button">Edit</button>
                <button onClick={() => handleDelete(classItem.id)} className="class-delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminClasses;
