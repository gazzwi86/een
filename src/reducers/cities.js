const cities = (
  state = {
    loading: false,
    error: false,
    cities: []
  },
  { type, payload }
) => {
  switch (type) {
    case 'GET_CITIES_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };

    case 'GET_CITIES_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      };

    case 'GET_CITIES_FULFILLED':
      return {
        loading: false,
        error: payload.error ? payload.error : false,
        cities: payload.error ? [] : payload.data.cities
      };

    default:
      return state;
  }
};

export default cities;
