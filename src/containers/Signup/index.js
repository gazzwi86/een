import React, { useRef } from 'react';
import FormBuilder from '../../components/FormBuilder';
import './styles.css';

const Signup = ({ history }) => {
  let errorMessage = '';
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const onSubmit = () => {
    // dispatch(signup(emailRef.current.value, passwordRef.current.value));
  };

  const form = [
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      placeholder: 'Email',
      ref: emailRef,
      isRequired: true,
      validation: {
        type: 'email',
        error: 'This should be a valid email'
      }
    },
    {
      type: 'password',
      id: 'password',
      label: 'Password',
      placeholder: 'Password',
      ref: passwordRef,
      isRequired: true,
      validation: {
        type: 'password',
        error:
          'Password must be a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      }
    },
    {
      type: 'submit',
      id: 'submit',
      children: 'Submit'
    }
  ];

  return (
    <div className="signup">
      <h1>Signup</h1>

      <FormBuilder form={form} error={errorMessage} onSubmit={onSubmit} />
    </div>
  );
};

export default Signup;
