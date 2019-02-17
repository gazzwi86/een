const lists = (
  state = {
    loading: false,
    error: false,
    lists: []
  },
  { type, payload }
) => {
  switch (type) {
    case 'GET_PLACE_PENDING':
    case 'ADD_PLACE_PENDING':
    case 'REMOVE_PLACE_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };

    case 'GET_PLACE_REJECTED':
    case 'ADD_PLACE_REJECTED':
    case 'REMOVE_PLACE_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      };

    case 'ADD_PLACE_FULFILLED':
      state.lists.push(payload.data.createList);

      return {
        loading: false,
        error: false,
        lists: state.lists
      };

    case 'GET_PLACE_FULFILLED':
      return {
        loading: false,
        error: payload.error ? payload.error : false,
        lists: payload.error ? [] : payload.data.lists
      };

    case 'REMOVE_PLACE_FULFILLED':
      const lists = state.lists;
      const index = lists.findIndex(
        item => item._id === payload.data.deleteList
      );
      lists.splice(index, 1);

      return {
        loading: false,
        error: payload.error ? payload.error : false,
        lists: payload.error ? state.lists : lists
      };

    default:
      return state;
  }
};

export default lists;
