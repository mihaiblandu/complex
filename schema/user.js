import {gql } from 'apollo-server-express';

const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date');


const schema =gql`
    
    type User {
        id: Int!
        username: String!
        imageUrl : String!
        email : String!
        googleId : String!
        createOn : String
    }
    
    type Query {
        getUser(userId: Int!): User
        allUsers: [User!]!
        getUserbyName(username : String!): User

    }
`
export default schema
