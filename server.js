import { ApolloServer, gql } from 'apollo-server-express';
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
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

    const uri = "mongodb://node:password@127.0.0.1:32768/node";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    try {
         client.connect();
    

         console.log(client);
    } catch (e) {
        console.error(e);
    }

    console.log("Server is running on port : " + Port)
})

