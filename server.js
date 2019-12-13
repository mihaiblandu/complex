import { ApolloServer, gql } from 'apollo-server-express';
const express = require('express')
const mongodb = require('mongodb');
import resolvers from './resolver/user'
import user from './schema/user'
import passport from 'passport'
import cors from 'cors'

import { googleOauth, googleCallback, googleRedirect, googleScope } from './passport'
const app = express()
const Port = 8081
import  URL  from './config/keys'
const models = require('./models/connect')

const schema = user
passport.use(googleOauth)
app.use(passport.initialize())
app.get('/auth/google', googleScope)
app.get('/auth/google/callback', googleCallback, googleRedirect)

const server = new ApolloServer({
  cors: {
		origin: '*',			// <- allow request from all domains
		credentials: true},		// <- enable CORS response for requests with credentials (cookies, http authentication)
    typeDefs: schema,
    resolvers,
    context: {
      models
  }
  });
  server.applyMiddleware({ app, path: '/graphql' });

  //app.use('*', cors({ origin: 'http://localhost:8081' }))

  app.get('/app', (req, res) => res.send("Hello world"))

  app.get(['/login','/'], (req, res) => res.redirect('/auth/google'))

app.listen(Port,()=>{
    console.log('\x1Bc');
   // console.log(URL);

    const MongoClient = mongodb.MongoClient;
//const uri = "mongodb+srv://mihaiblandu:Alfaomega@mihaiblandu-qoavz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(URL.mlabURI, { useNewUrlParser: true });
client.connect(err => {

   const collection =  client.db("mongo").collections();
  
  //perform actions on the collection object
    console.log(collection)
  
  client.close();
});

    console.log("Server is running on port : " + Port)
})


