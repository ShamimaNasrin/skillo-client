import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //Register
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

     //Login
     const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile info(get name and photoURL)
    // const updateUserProfile = (profile) => {
    //     return updateProfile(auth.currentUser, profile);
    // }

    const authInfo = {
        user, createUser, signIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;