/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import  { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
// import auth from '../firebase/firebase.init';
// import useFirebase from "../Hooks/useFirebase";
// import useFirebase from '../Hooks/useFirebase'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const allContext ={
        user,
        createUser,

        signIn
    }
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;