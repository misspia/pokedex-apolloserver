/**
 * A map of functions which return data for the schema
 */

const resolvers = {
  Query: {
    hello: (root, args, context) => 'hiiii',
    bye: (root, args, context) => 'byeeeee'
  }
}

module.exports = resolvers;