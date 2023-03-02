const resolvers = {
  Query: {
    // returns an array of tracks used to populate the homepage grid of webclient
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by id for the track page
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getTrack(id);
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

    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id);
    }

    // * TESTING -- USING FETCH TAKES MORE TIME THAN USING DATASOURCES
    // author: async({authorId}, _, {dataSources}) => {
    //   const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //   const res = await fetch(`${baseURL}/author/${authorId}`);
    //   return res.json();
    // }
  }
}

module.exports = resolvers;
