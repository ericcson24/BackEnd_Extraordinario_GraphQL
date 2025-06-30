// deno-lint-ignore-file
import { MongoClient } from 'mongodb'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./typeDefs.ts";
//import { resolvers } from "./resolvers.ts";
import { Usuario } from "./types.ts";



const MONGO_URL= Deno.env.get("MONGO_URL")
if(!MONGO_URL) throw new Error ("Error al coger la clave de mongo db")

const client = new MongoClient(MONGO_URL)
await client.connect()
console.log("Cliente conectado a mongo")

const db=client.db("EjercicioUsuarios")
const UsuarioCollection=db.collection<Usuario>("Usuario")


/* //esto es en graphql
const server= new ApolloServer({typeDefs,resolvers})

const{url}= await startStandaloneServer(server,{context:async()=>({UsuarioCollection})})

console.log(`  Server ready at: ${url}`)

*/

const handler= async (req:Request):Promise<Response>=>{
  const url= new URL(req.url)
  const method= req.method
  const path= url.pathname
  const searchParams = url.searchParams

  if (method==="GET"){

    if(path==="/usuario"){}


  }else if(method==="POST"){

    if(path==="/usuario"){
      
    }
  }


  return new Response("Bad request",{status:400})
}
Deno.serve({port:3000}, handler)