import Cookies from 'js-cookie';

const userReducer = (
  state = {
    loading: false,
    error: false,
    userId: false,
    token: false,
    tokenExpires: false
  },
  { type, payload }
) => {
  switch (type) {
    case 'LOGOUT':
      Cookies.remove('token');

      return {
        ...state,
        userId: false,
        token: false,
        tokenExpires: false
      };

    case 'LOGIN_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };

    case 'LOGIN_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      };

    case 'LOGIN_FULFILLED':
      const user = payload.data.signinUser;

      if (user) {
        const response = {
          ...user
        };

        Cookies.set('token', JSON.stringify(response), {
          expires: 1 / 24,
          secure: true
        });

        return {
          ...state,
          loading: false,
          error: payload.error ? payload.error : false,
          ...response
        };
      } else {
        return {
          ...state,
          error: payload.errors[0].message
        };
      }

    default:
      return state;
  }
};

export default userReducer;
