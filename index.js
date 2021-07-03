const ApolloServer = require('apollo-server-micro').ApolloServer
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')


const apolloServer = new ApolloServer({ 
  typeDefs, 
  resolvers,
  introspection: true,  
  playground: true,
})

module.exports = apolloServer.createHandler({ path: '/api/graphql' })