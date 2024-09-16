import React, { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminClasses = () => {
  const [className, setClassName] = useState('');
  const [headline, setHeadline] = useState('');
  const [mainTeacher, setMainTeacher] = useState(''); // Add main teacher field
  const [image, setImage] = useState(null);
  const [classes, setClasses] = useState([]);
  const [progress, setProgress] = useState(0);
  const [editingClassId, setEditingClassId] = useState(null); // Track which class is being edited

  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
    return unsubscribe;
  }, [navigate]);

  // Fetch all class data
  useEffect(() => {
    const fetchClasses = async () => {
      const q = query(collection(db, 'classes'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const classList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setClasses(classList);
    };

    fetchClasses();
  }, []);

  // Handle image selection
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  // Add or Update Class
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!className || !headline || !mainTeacher) {
      alert('Class name, headline, and main teacher are required.');
      return;
    }

    if (!image && !editingClassId) {
      alert('Image is required for new classes.');
      return;
    }

    // If editing a class, update the class data
    if (editingClassId) {
      try {
        const classDocRef = doc(db, 'classes', editingClassId);
        const updateData = { className, headline, mainTeacher };
        
        if (image) {
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
              updateData.imageUrl = imageUrl;
              await updateDoc(classDocRef, updateData);
              setImage(null);
              setClassName('');
              setHeadline('');
              setMainTeacher('');
              setProgress(0);
              setEditingClassId(null);
            }
          );
        } else {
          await updateDoc(classDocRef, updateData);
          setClassName('');
          setHeadline('');
          setMainTeacher('');
          setImage(null);
          setProgress(0);
          setEditingClassId(null);
        }
      } catch (error) {
        console.error('Error updating class:', error);
      }
    } else {
      // If adding a new class
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
            await addDoc(collection(db, 'classes'), {
              className,
              headline,
              mainTeacher,
              imageUrl,
              createdAt: new Date(),
            });
            setImage(null);
            setClassName('');
            setHeadline('');
            setMainTeacher('');
            setProgress(0);
          } catch (error) {
            console.error('Error adding class:', error);
          }
        }
      );
    }
  };

  // Edit Class
  const handleEdit = (classItem) => {
    setClassName(classItem.className);
    setHeadline(classItem.headline);
    setMainTeacher(classItem.mainTeacher); // Prefill main teacher field
    setEditingClassId(classItem.id);
  };

  // Delete Class
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'classes', id));
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  return (
    <div>
      <h2>Manage Classes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Class Name (e.g. 1c)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Main Teacher"
          value={mainTeacher}
          onChange={(e) => setMainTeacher(e.target.value)}
        />
        <input type="file" onChange={handleImageUpload} />
        <button type="submit">{editingClassId ? 'Update Class' : 'Add Class'}</button>
      </form>

      {progress > 0 && <p>Uploading: {progress}%</p>}

      <h3>Class List</h3>
      <div>
        {classes.map((classItem) => (
          <div key={classItem.id} style={{ margin: '10px 0' }}>
            <h4>{classItem.headline}</h4>
            <p>Main Teacher: {classItem.mainTeacher}</p> {/* Display main teacher */}
            {classItem.imageUrl && (
              <img src={classItem.imageUrl} alt={classItem.className} width="100" />
            )}
            <button onClick={() => handleEdit(classItem)}>Edit</button>
            <button onClick={() => handleDelete(classItem.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminClasses;
