"use client"
import React from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const SignInButton = () => {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            if(result.user.auth.currentUser){
                window.localStorage.setItem('firebase-restwave-token', JSON.stringify(result.user.auth.currentUser));
            }
            
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Unable to Sign In")
        }
    };

    return (
        <div style={{height:"50px", background:"white", display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"10px",alignItems:"center",fontSize:"medium",fontWeight:"600",padding:"7px",borderRadius:"7px",boxShadow:"0 0 7px 0 grey"}} onClick={signInWithGoogle}>
            <img src='./google.png' height={"80%"} alt='Google Logo' />
            Sign in with Google
        </div>
    );
};

export default SignInButton;