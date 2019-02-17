import fetchGQL from '../helpers/fetchGQL';

export const login = (email, password) => ({
  type: 'LOGIN',
  payload: fetchGQL(
    `query {
      signinUser(authInput: {email: "${email}", password: "${password}"}) {
        userId
        token
        tokenExpires
      }
    }`
  )
});

export const setUser = (userId, token, tokenExpires) => ({
  type: 'SET_USER',
  payload: {
    userId,
    token,
    tokenExpires
  }
});

export const logout = () => ({
  type: 'LOGOUT',
  payload: null
});
