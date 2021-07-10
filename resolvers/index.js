const admieResolvers = require('./admieResolvers')

const resolvers = {
  Query: {
    ...admieResolvers.Query
  },
};

module.exports = resolvers;
