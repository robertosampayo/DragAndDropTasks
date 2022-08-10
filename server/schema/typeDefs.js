const { gql } = require("apollo-server-express");

const typeDefs = gql`


  type List {
    _id: ID
    title: String!
    tasks: [String!]

  }

  type Query {
    lists: [List!]!
    list(id: ID!): List!
  }

  input CreateListInput {
    title: String!
    tasks: [String!]
  }

  input CreateTask {
    idList: ID
    task: String
  }

  input DeleteTask {
    idList: ID
    task: String
  }

  type Mutation {
    createList(input: CreateListInput!): List!
    createTask(input: CreateTask!): [String]!
    deleteTask(input: DeleteTask!): [String]! 
  }



`;

module.exports = typeDefs;