const cors = require('micro-cors')({
  allowMethods: ['OPTIONS', 'POST'],
  allowHeaders: ['content-type'],
});
const { ApolloServer } = require('apollo-server-micro');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = cors(server.createHandler());
