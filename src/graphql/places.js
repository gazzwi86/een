import gql from 'graphql-tag';

export const createPlace = gql`
  mutation {
    createPlace(placeInput: { name: "$name" }) {
      _id
      name
      creator {
        _id
        email
      }
    }
  }
`;

export const updatePlace = gql`
  mutation {
    updatePlace(placeInput: { _id: "$id", name: "$name" }) {
      _id
      name
      creator {
        _id
        email
      }
    }
  }
`;

export const getPlaces = gql`
  query {
    lists {
      _id
      name
      creator {
        _id
        email
      }
    }
  }
`;

export const deletePlace = gql`
  mutation {
    deletePlace(placeId: "$id")
  }
`;
