// import React from 'react';

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import './NavSection.css'
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useContext, useState } from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { useContext } from "react";
// import AuthProvider from "../../Provider/AuthProvider";




const NavSection = () => {
  // const user = useContext(AuthProvider);
  // const [user] = useAuthState(auth);
  // console.log(user);
  // const {displayName}= user;
  // console.log(displayName);

  const {user, setUser} = useState(null);
  const huser = useContext(AuthContext);
  // const [duser] = useAuthState(auth);
  console.log(huser);
  // const user = useContext(AuthProvider);
  // const [user] = useAuthState(auth);
  // console.log(user);
  // const {displayName}= user;
  // console.log(displayName);
  // const user = getAuth(app)
  // const [data] = useAuthState(auth);

console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null);
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (

    <div>
      <Navbar bg="success" className="bg-opacity-25" expand="lg">
        <Container >
          <h2 className="me-5 text-success">Dish Dazzle</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
            <NavLink to="/" className="text-decoration-none text-dark">Home</NavLink>
            <NavLink to="/blog" className="text-decoration-none text-dark">Blog</NavLink>
             




            </Nav>

            <Nav className="ms-auto">
              
              <FaUserCircle style={{ fontSize: '2rem' }} />
            </Nav>


            <Nav>
            {
              user? 
              <Button onClick={handleSignOut} variant="outline-success" className="ms-3">sign out</Button>
              :
              <Link to="/login"><Button variant="outline-success" className="ms-3">sign In</Button></Link> 


            
            }
              {/* <Link to="/login"><Button variant="outline-success" className="ms-3">LogOut</Button></Link> */}
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default NavSection;