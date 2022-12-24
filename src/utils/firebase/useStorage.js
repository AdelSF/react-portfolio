import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from './firebase.utils';



export default function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    console.log("1")

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      const name = file.name;
      await collectionRef.add({ url, createdAt, name });
      setUrl(url);
      console.log("u", url)
    });
  }, [file]);


  return { progress, url, error };
}