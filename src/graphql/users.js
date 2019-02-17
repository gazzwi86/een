import gql from 'graphql-tag';

export const createUser = gql`
  mutation {
    createUser(
      userInput: {
        email: "gazzwi86@gmail.com"
        password: "password"
        places: []
      }
    ) {
      _id
      email
      password
    }
  }
`;

export const updateUser = gql`
  mutation {
    updateUser(
      userInput: {
        _id: "$id"
        email: "$email"
        password: "$password"
        lists: []
      }
    ) {
      _id
      email
      password
    }
  }
`;

export const getUsers = gql`
  query {
    users {
      _id
      email
      password
      places {
        _id
        name
      }
    }
  }
`;

export const signinUser = gql`
  query {
    signinUser(
      authInput: { email: "gazzwi86@gmail.com", password: "password" }
    ) {
      userId
      token
      tokenExpires
    }
  }
`;

export const deleteUser = gql`
  mutation {
    deleteUser(userId: $id)
  }
`;
