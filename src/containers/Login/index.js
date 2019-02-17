import React, { useRef } from 'react';
import useAppReducer from '../../reducers/useAppReducer';
// import { login } from '../../actions/users';
import FormBuilder from '../../components/FormBuilder';
import Button from '../../components/Button';

const Login = ({ history, error }) => {
  const [{ user }, dispatch] = useAppReducer();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const onSubmit = () => {
    // dispatch(login(emailRef.current.value, passwordRef.current.value));
  };

  const errorMessage =
    user && user.errors && user.errors.length && user.errors[0].message
      ? user.errors[0].message
      : error;

  const form = [
    {
      type: 'email',
      id: 'email',
      elmRef: emailRef,
      label: 'Email',
      placeholder: 'Email',
      isRequired: true,
      validation: {
        type: 'email',
        error: 'This should be a valid email'
      }
    },
    {
      type: 'password',
      id: 'password',
      elmRef: passwordRef,
      label: 'Password',
      placeholder: 'Password',
      isRequired: true
    },
    {
      type: 'submit',
      id: 'submit',
      children: 'Submit'
    }
  ];

  return (
    <div className="login">
      <h1>Login</h1>

      <FormBuilder form={form} error={errorMessage} onSubmit={onSubmit} />

      <div className="login__buttons">
        <Button variation="secondary" to="/signup">
          <span>Signup</span>
        </Button>

        <Button variation="secondary" to="/forgotten-password">
          <span>Forgotten password</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
