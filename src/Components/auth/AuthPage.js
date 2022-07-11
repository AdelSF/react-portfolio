import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';





export default function AuthPage(){

      return (
          <>  
              <H1>This is Auth page</H1>
              <SignUpForm />
              <SignInForm />
          </>
      );
  }

  const H1 = styled.h1`
    color: white;
  `