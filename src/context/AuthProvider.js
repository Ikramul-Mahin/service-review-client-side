import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const signWithGoggle = () => {
        signInWithPopup(auth, googleProvider)
        setLoading(true)
    }
    const upadateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, loginUser, userSignOut, upadateUserProfile, signWithGoggle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;