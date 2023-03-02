const resolvers = {
  Query: {
    // returns an array of tracks used to populate the homepage grid of webclient
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  }
}

module.exports = resolvers;
