import { ApolloServer, gql } from 'apollo-server-express';
const express = require('express')

import resolvers from './resolver/user'
import user from './schema/user'
const app = express()
const Port = 8081

const schema = user
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });
  server.applyMiddleware({ app, path: '/graphql' });

app.listen(Port,()=>{
    console.log('\x1Bc');

    console.log("Server is running on port : " + Port)
})

