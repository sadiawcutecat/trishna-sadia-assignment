// import React from 'react';

import { GoogleAuthProvider,  createUserWithEmailAndPassword,  signInWithPopup } from "firebase/auth";
import NavSection from "../Shared/NavSection";
import { Link, } from 'react-router-dom';
// import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import auth from "../../firebase/firebase.config";
// import { useEffect } from "react";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [googleUser, setGoogleUser] = useState('');
const {fromData, setFromData} = useState('');
// const [loginUser, setLoginUser] = useState('');

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setGoogleUser(user);
                // console.log("user = ", user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    
const handleSubmit = (event) =>{
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    // firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const loggedUser = result.user;
        setFromData(loggedUser);
    })

createUser(email, password)
.then(result =>{
    const user = result.user;
    console.log(user)
})
.catch(error =>{
    console.log(error)
})
    // useEffect()
}
    return (
        <div className="">
            <NavSection></NavSection>
            <div className="card my-5 bg-success  w-50 mx-auto text-center">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} >
                    {/* <input className="my-2 px-1 w-50 " placeholder="Enter Your name" type="text" name="name" id=" " />
                    <br /> */}
                    <input className="my-2 px-1 w-50 " placeholder="Enter Your email" type="email" name="email" id="" />
                    <br />
                    <input className="my-2 px-1 w-50 " placeholder="Enter Your password" type="password" name="password" id="" />
                    <br />
                    <input className="my-2 px-1 w-50 " type="submit" value="submit  " />

                </form>
                <button className="my-2 px-1 w-50 mx-auto bg-warning"  onClick={handleGoogleSignIn}>google button</button>
                <p className=''><small>If you do not have an account? please <Link className='text-primary text-bold' to="/login"> Login</Link></small></p>
            </div>
        </div>
    );
};

export default SignUp;