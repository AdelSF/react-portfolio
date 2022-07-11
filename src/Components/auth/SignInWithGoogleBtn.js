import React, { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import styled from 'styled-components';
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import 'regenerator-runtime/runtime'
import SignUpForm from './SignUpForm';





export default function SignInWithGoogleBtn(){

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
      
      return (
          <>  
              <H1>This is sign in with google btn page</H1>
              <button onClick={logGoogleUser}>sign in with google pop up</button>
          </>
      );
  }

  const H1 = styled.h1`
    color: white;
  `