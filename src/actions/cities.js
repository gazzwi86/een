import fetchGQL from '../helpers/fetchGQL';

export const getCities = token => ({
  type: 'GET_CITIES',
  payload: fetchGQL(
    `query {
      cities {
        city
        country
        region
        latitude
        longitude
      }
    }`,
    token
  )
});
