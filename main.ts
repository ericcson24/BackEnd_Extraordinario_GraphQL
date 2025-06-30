

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./typeDefs.ts";
import { resolvers } from "./resolvers.ts";



const server = new ApolloServer({typeDefs, resolvers})
const { url } = await startStandaloneServer(server, {
  context: async() => ({})
})

console.log(`🚀  Server ready at: ${url}`);
