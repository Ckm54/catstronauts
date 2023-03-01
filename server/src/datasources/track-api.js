const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    // ensure we get access to RESTDataSource features
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}

module.exports = TrackAPI;
