import React from "react";

import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signup/sign-up.component";

import "./signIn-signUp.styles.scss";

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;