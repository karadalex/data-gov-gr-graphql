const admieResolvers = require('./admieResolvers')
const mdgResolvers = require('./mdgResolvers')

const resolvers = {
  Query: {
    ...admieResolvers.Query,
    ...mdgResolvers.Query,
  },
};

module.exports = resolvers;
