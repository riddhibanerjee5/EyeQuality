import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import { Redirect } from "react-router";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "", // removed
  authDomain: "eyequality-d955a.firebaseapp.com",
  projectId: "eyequality-d955a",
  storageBucket: "eyequality-d955a.appspot.com",
  messagingSenderId: "943900169933",
  appId: "1:943900169933:web:842e0aeaf9c1aafbb5fb84"
};

// Initialize Firebase
export const app=firebase.initializeApp(firebaseConfig);

 //const auth = firebase.auth();
 const firestore = firebase.firestore();
 //const storage = firebase.storage();

//sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  try{
    firebase.auth().signInWithPopup(provider);
  }
  catch (error){
    console.log(error);
  }
  return new Redirect("/survey");
  };


//create user infomation
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return null; 
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
        return null;
      }
    }
    return getUserDocument(user.uid);
  };

  //get user data
  export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
      return null;
    }
  };



//create an object (template)
export const generateObjectDocument = async (folderName, data) => {
    if (!folderName || !data) return null; 
    const ref = await firestore.collection(folderName).doc();
    const snapshot = await ref.get();
    if (!snapshot.exists) {
      try {
        await ref.set({
          ...data
        });
        return getObjectDocument(snapshot.id);
      } catch (error) {
        console.error("Error creating document", error);
        return null;
      }
    }
    
  
    return await getObjectDocument(folderName, snapshot.id);
  };
  
  
  
  //get an object (template)
  export const getObjectDocument = async (folderName, id) => {
    if (!id || !folderName) return null;
    try {
      const document = await firestore.doc(`${folderName}/${id}`).get();
      return {
        id,
        ...document.data()
      };
    } catch (error) {
      console.error("Error fetching document", error);
      return null;
    }
  };
  
  
  //return true if deleted and false if not
  export const deleteObjectDocument = async (folderName, id) => {
    if (!id) return false;
    try {
      const documentRef = await firestore.doc(`${folderName}/${id}`);
      return await documentRef.delete();
    } catch (error) {
      console.error("Error fetching document", error);
      return false;
    }
  };
  
  
  //get all objects (templates)
  export const getAllObjectsWithALimit = async (folderName, limit) => {
    var objects= await firestore.collection(folderName).limit(limit);
    var temp=[];
    await objects.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           temp.push({ id: doc.id, ...doc.data() });
        })
        console.log(temp);
     })
     return temp;
  };
  
    

  //if none then will be []
  export const getAllObjectsByOrder = async (folderName, limit) => {
    var objects= await firestore.collection(folderName).orderBy("createdTime").limitToLast(limit);
    var temp=[];
    await objects.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           temp.push({ id: doc.id, ...doc.data() });
        })
        console.log(temp);
     })
     return temp;
  };
    

  //if none will be []
    export const getAllObjectsNoLimit = async (folderName) => {
    var objects= await firestore.collection(folderName);
    var temp=[];
    await objects.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           temp.push({ id: doc.id, ...doc.data() });
        })
        console.log(temp);
     })
     return temp;
  };
  
  
  //update object data
  export const updateFirebaseObject = async (folderName,id,additionalData) => {
    if (!id || !folderName || !additionalData) return null;
      const ref = firestore.doc(`${folderName}/${id}`);
      const snapshot = await ref.get();
      console.log(snapshot);
      if (snapshot.exists) {
        return await ref.update(additionalData);
      }
      else{
        return null;
      }
    
  }
