import React, { useEffect, useState } from "react";
import {app,generateUserDocument} from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthContext = React.createContext();



export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect( async () => {
    app.auth().onAuthStateChanged(async (userAuth) => {
      try{
      const user = await generateUserDocument(userAuth);
      setCurrentUser(user);
      setPending(false);
    }
    catch (eror){
      setPending(false);
    }

    });
  }, []);


  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};