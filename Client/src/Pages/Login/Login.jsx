import { GoogleAuthProvider,  signInWithEmailAndPassword,  signInWithPopup } from 'firebase/auth';
import { Link, } from 'react-router-dom';
import NavSection from '../Shared/NavSection';
// import auth from '../../firebase/firebase.init';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import auth from '../../firebase/firebase.config';

const Login = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    const provider = new GoogleAuthProvider();
    const {signIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
               setUser(user);
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
    

    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error =>{
        console.log(error);
    })
   
    // useEffect()
} 


    return (
        <div>
            <NavSection></NavSection>

            <div className="card my-5 bg-success  w-50 mx-auto text-center">
                <h2>Login </h2>
                <form onSubmit={handleSubmit} >
                    <input className="my-2 px-1 w-50 " placeholder="Enter Your email" type="email" name="email" id="" />
                    <br />
                    <input className="my-2 px-1 w-50 " placeholder="Enter Your password" type="password" name="password" id="" />
                    <br />
                    <input className="my-2 px-1 w-50 " type="submit" value="Login  " />

                </form>

                <button className="my-2 px-1 w-50 mx-auto bg-warning"  onClick={handleGoogleSignIn}>google button</button>

                <p className=''><small>If you do not have an account? please <Link className='text-primary text-bold' to="/signUp"> SignUp</Link></small></p>
            </div>



            
           


        </div>

    );
};

export default Login;