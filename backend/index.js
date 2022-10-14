import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { CoursesAPI } from './db.js'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Course {
    name: String
    holes: Int
    par1: Int
    par2: Int
    par3: Int
    par4: Int
    par5: Int
    par6: Int
    par7: Int
    par8: Int
    par9: Int
    par10: Int
    par11: Int
    par12: Int
    par13: Int
    par14: Int
    par15: Int
    par16: Int
    par17: Int
    par18: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 
  type Query {
    getAllCourses: [Course]
    getCourseByName: Course
  }
`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    getAllCourses: async (_, __, { dataSources }) => {
      return dataSources.coursesAPI.getAllCourses();
    },
    },
  }


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      coursesAPI: new CoursesAPI()
    }
  }
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);