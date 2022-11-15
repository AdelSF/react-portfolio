import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: ''
}

export default function SignInForm(){

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const signInWithGoogleBtn = async () => {
        try {
            await signInWithGooglePopup();
        } catch(error) {
            console.log("popup window closed")
        }
    }
      

    function resetFormFields() {
        setFormFields(defaultFormFields);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault();


        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            setCurrentUser(user);
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('user-not-found');
                    break;
                default:
                    console.log(error);
            }
        }
    }

      return (
          <>  
              <H1>Already Have an account</H1>
              <Form onSubmit={handleSubmit}>
                  
                  <Label>Email:</Label>
                  <Input type="email" required onChange={handleChange} name='email' value={email}/>

                  <Label>Password:</Label>
                  <Input type="password" required onChange={handleChange} name='password' value={password}/>

                  <button type="submit">Sign In</button>
                  <button type="button" onClick={signInWithGoogleBtn}>google sign in</button>
              </Form>
          </>
      );
  }

  const H1 = styled.h1`
    color: white;
    display: flex;
    justify-content: center;
  `
  const Form = styled.form`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    background: gray;
    margin: 0 auto;
    /* height: 300px; */
    width: 300px;
    color: white;
  `

  const Label = styled.label`
    display: block;
    margin: 0 auto;

  `
  const Input = styled.input`
    display: block;
    margin: 0 auto;
  `