const admieResolvers = require('./admieResolvers')
const mdgResolvers = require('./mdgResolvers')
const dedieResolvers = require('./dedieResolvers')

const resolvers = {
  Query: {
    ...admieResolvers.Query,
    ...mdgResolvers.Query,
    ...dedieResolvers.Query
  },
};

module.exports = resolvers;
