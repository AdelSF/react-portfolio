import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUpForm(){

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    function resetFormFields() {
        setFormFields(defaultFormFields);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email already exist');
            } else {
                console.log("user creation Error" , error);
            }
        }
    }

      return (
          <>  
              <H1>This is sign Up Form in page</H1>
              <Form onSubmit={handleSubmit}>
                  <Label>Display Name:</Label>
                  <Input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

                  <Label>Email:</Label>
                  <Input type="email" required onChange={handleChange} name='email' value={email}/>

                  <Label>Password:</Label>
                  <Input type="password" required onChange={handleChange} name='password' value={password}/>

                  <Label>Confirm Password:</Label>
                  <Input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                  <button type="submit">Sign Up</button>
              </Form>
          </>
      );
  }

  const H1 = styled.h1`
    color: white;
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