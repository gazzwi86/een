import React, { Fragment, useRef, useState } from 'react';
import useAppReducer from '../../reducers/useAppReducer';
// import { reset } from '../../actions/users';
import FormBuilder from '../../components/FormBuilder';

const ForgottenPassword = ({ history, error }) => {
  const [state, dispatch] = useAppReducer();
  const [formState, setFormState] = useState({ submitted: false });

  const emailRef = useRef('');

  const onSubmit = () => {
    // dispatch(reset(emailRef.current.value));
    setFormState({ isSubmitted: true });
  };

  const errorMessage =
    state.user &&
    state.user.errors &&
    state.user.errors.length &&
    state.user.errors[0].message
      ? state.user.errors[0].message
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
      type: 'submit',
      id: 'submit',
      children: 'Submit'
    }
  ];

  return (
    <div className="forgotten-password">
      <h1>Forgotten Password</h1>

      {!formState.isSubmitted ? (
        <Fragment>
          <p>
            Usual drill, add you email address and we'll send you a link to
            reset your password.
          </p>
          <FormBuilder form={form} error={errorMessage} onSubmit={onSubmit} />
        </Fragment>
      ) : (
        <p>
          Please check your emails and follow the link inside. Remember it could
          be in the junk folder.
        </p>
      )}
    </div>
  );
};

export default ForgottenPassword;
