import React from 'react';
import useAppReducer from '../../reducers/useAppReducer';

const ListItem = React.lazy(() => import('../../components/ListItem'));

const Keen = ({ history }) => {
  const [state, dispatch] = useAppReducer();

  const remove = id => {
    // dispatch(removeList(id, state.token));
  };

  if (!state.lists || !state.lists.length) {
    // dispatch(getList(id, state.token));
  }

  return (
    <div className="keen">
      <h1>Keen</h1>
      <p>Add a title to your list of destinations</p>

      <ul className="keen__list">
        {state.lists &&
          state.lists.length &&
          state.lists.map(list => (
            <ListItem key={list._id} removeItem={() => remove(list._id)}>
              {list.name}
            </ListItem>
          ))}
      </ul>
    </div>
  );
};

export default Keen;
