import gql from 'graphql-tag';

export const getCities = gql`
  query {
    cities {
      _id
      city
      province
      country
      coordinates
    }
  }
`;
