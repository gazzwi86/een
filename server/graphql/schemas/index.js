const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    email: String!
    password: String
    places: [Place!]!
  }

  input UserInput {
    _id: ID
    email: String!
    password: String!
    places: [PlaceInput!]!
  }
  
  type Auth {
    userId: ID!
    token: String!
    tokenExpires: Int!
  }

  input AuthInput {
    email: String!
    password: String!
  }
  
  type Place {
    _id: ID!
    name: String!
    creator: User!
  }

  input PlaceInput {
    _id: ID
    name: String!
    creator: String!
  }

  type City {
    _id: ID!
    city: String!
    province: String!
    country: String!
    coordinates: [Int!]!
  }

  type RootQuery {
    users: [User!]!
    signinUser(authInput: AuthInput): Auth
    places: [Place!]!
    cities: [City!]!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    updateUser(userInput: UserInput): User
    deleteUser(userId: ID!): ID!
    createPlace(placeInput: PlaceInput): Place
    updatePlace(placeInput: PlaceInput): Place
    deletePlace(placeId: ID!): ID!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
