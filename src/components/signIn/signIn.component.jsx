import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "./../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth"

import "./signIn.styles.scss";

class SignIn extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           email: '',
           password: ''
       }
   }

   handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = event.target;

        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("credentials: ", user)
                })
                .catch((error) => {
                    console.log(error)
                });
            this.setState({ email: '', password: ''})
        } catch (error) {
            console.error(error)
        }

        
   }

   handleChange = event => {
       const {name, value} = event.target;
       
        this.setState({[name]: value})
    }

   render(){
       return (
           <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" onChange={this.handleChange} type="email" label="Email" value={this.state.email} required />
                <FormInput name="password" onChange={this.handleChange} type="password" label="Password" value={this.state.password} required/>
                <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleAuth>Google Sign In</CustomButton>
                </div>   
            </form>
           </div>
       )
   }
}

export default SignIn;