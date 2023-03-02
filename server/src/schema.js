const { gql } = require("apollo-server");

const typeDefs = gql `
  "A track is a group of modules that teach about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "Track thumbnail displayed on details page"
    thumbnail: String
    "Approximate length to complete a track in minutes"
    length: Int
    "Number of modules a track contains"
    modulesCount: Int
    "The track's complete description, can be in markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of modules"
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compose a track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length in minutes"
    length: Int
  }

  "Author of a complete track or module"
  type Author {
    id: ID!
    "The author's name"
    name: String!
    "The author's profile image"
    photo: String
  }

  "Query to get tracks for the homepage grid"
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track

    #  TESTING,,,
    # tracksForHomeFetch: [Track!]!
  }
`

module.exports = typeDefs;
