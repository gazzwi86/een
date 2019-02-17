import React, { useRef } from 'react';
import useAppReducer from '../../reducers/useAppReducer';
import { toggleModal } from '../../actions/ui';
import FormBuilder from '../../components/FormBuilder';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

const Settings = ({ error }) => {
  const [{ user, showModal }, dispatch] = useAppReducer();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const errorMessage =
    user && user.errors && user.errors.length && user.errors[0].message
      ? user.errors[0].message
      : error;

  const toggleModalAction = () => dispatch(toggleModal(!showModal));

  const remove = e => {
    e.preventDefault();

    // dispatch(removeList(id, state.token));
  };

  const onSubmit = () => {
    // dispatch(updateUser(emailRef.current.value, passwordRef.current.value));
  };

  const form = [
    {
      type: 'email',
      id: 'email',
      ref: emailRef,
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
      ref: passwordRef,
      label: 'Password',
      placeholder: 'Password',
      isRequired: true
    },
    {
      type: 'submit',
      id: 'submit',
      children: 'Submit'
    },
    {
      type: 'button',
      id: 'submit',
      action: toggleModalAction,
      children: 'Delete my account'
    }
  ];

  return (
    <div>
      <h1>Settings</h1>
      <FormBuilder form={form} error={errorMessage} onSubmit={onSubmit} />

      {showModal && (
        <Modal title="Are you sure?">
          <p>
            Deleting your account means you will lose all data, and this cannot
            be undone.
          </p>

          <Button type="button" action={toggleModalAction}>
            <span>Cancel</span>
          </Button>

          <Button type="button" action={remove}>
            <span>Delete my account</span>
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default Settings;
