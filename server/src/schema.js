const { gql } = require("apollo-server");

const typeDefs = gql `
  "A track is a group of modules that teach about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete track or module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`

module.exports = typeDefs;
