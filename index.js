const cors = require('micro-cors')({});
const { ApolloServer } = require('apollo-server-micro');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

const apolloHandler = server.createHandler();

module.exports = cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  return apolloHandler(req, res);
});
