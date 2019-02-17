import fetchGQL from '../helpers/fetchGQL';

export const getPlaces = token => ({
  type: 'GET_PLACE',
  payload: fetchGQL(
    `query {
      places {
        _id
        name
        destinations{
          destination
          duration
        }
      }
    }`,
    token
  )
});

export const addPlace = (name, token) => ({
  type: 'ADD_PLACE',
  payload: fetchGQL(
    `mutation {
      createPlace(PlaceInput: {
        name:"${name}",
        destinations: [],
      }){
        _id
        name
      }
    }`,
    token
  )
});

export const removePlace = (id, token) => ({
  type: 'REMOVE_PLACE',
  payload: fetchGQL(
    `mutation{
      deletePlace(PlaceId: "${id}")
    }`,
    token
  )
});
