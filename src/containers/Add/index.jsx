import React, { useRef } from 'react';
import useAppReducer from '../../reducers/useAppReducer';
import FormBuilder from '../../components/FormBuilder';

const Add = ({ history, error }) => {
  const [{ userId, token }] = useAppReducer();

  const placeRef = useRef('');

  const onSubmit = async () => {
    try {
      // await dispatch(addList(placeRef.current.value, userId, token));
      placeRef.current.value = '';
    } catch (err) {
      console.error(err);
    }
  };

  const form = [
    {
      type: 'text',
      id: 'place',
      label: 'Place',
      placeholder: 'Brazil or Rio',
      ref: placeRef,
      isRequired: true,
      validation: {
        type: 'string',
        error: 'This should be a valid string'
      }
    },
    {
      type: 'submit',
      id: 'submit',
      children: 'Submit'
    }
  ];

  return (
    <div className="add">
      <h1>Add</h1>
      <p>Add somewhere you're keen to go to</p>

      <FormBuilder form={form} error={error} onSubmit={onSubmit} />
    </div>
  );
};

export default Add;
