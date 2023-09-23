import firebase_app from "../app/firebaseConfig.js";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export  async function addData(collection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export  async function getDoument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


// Function to fetch data from local storage
export function getLocalStorageItem(key){
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error("Error fetching data from local storage:", error);
      return undefined;
    }
  }
  
  // Function to save data to local storage
  export function setLocalStorageItem(key, data){
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }
  