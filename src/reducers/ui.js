const cities = (
  state = {
    showMenu: false
  },
  { type, payload }
) => {
  switch (type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        showMenu: payload
      };

    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: payload
      };

    default:
      return state;
  }
};

export default cities;
