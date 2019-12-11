import {gql } from 'apollo-server-express';

const schema =gql`
    
    type User {
        id: Int!
        username: String!
    }
    
    type Query {
        getUser(userId: Int!): User
        allUsers: [User!]!
    }
`
export default schema