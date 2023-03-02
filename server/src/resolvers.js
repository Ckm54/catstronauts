const resolvers = {
  Query: {
    // returns an array of tracks used to populate the homepage grid of webclient
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    //* TESTING CODE --- INEFFICIENCY OF USING FETCH INSTEAD OF DATASOURCES
    // tracksForHomeFetch: async() => {
    //   const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //   const res = await fetch(`${baseURL}/tracks`);
    //   return res.json();
    // }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    // * TESTING -- USING FETCH TAKES MORE TIME THAN USING DATASOURCES
    // author: async({authorId}, _, {dataSources}) => {
    //   const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //   const res = await fetch(`${baseURL}/author/${authorId}`);
    //   return res.json();
    // }
  }
}

module.exports = resolvers;
