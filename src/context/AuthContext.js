import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export default function AuthProvider({ children }) {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      return unSubscribe;
    });
  }, [auth]);

  const userInfo = { loading, signUp, login, logOut, currentUser };
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
}
