export const typeDefs =`#graphql
type Character  {
  id: ID!
  name: String!
  alternate_names: [String!]!
  species: String!
  gender: String!
  house: House 
},
 
type House  {
  name: String!
  characters: [Character!]!
},

type Query{
    getCharacter(id: ID!): Character
    getCharacters(ids: [ID!]): [Character!]!


}


    
`

//las querys que use para probarlo fueron:
/*
query GetCharacters {
  getCharacters (ids: ["9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","4c7e6819-a91a-45b2-a454-f931e4a7cce3"]){
    id
    name
    house {
      name
      characters {

        id
        name
        alternate_names
      }
    }
  }
}

*/

/* 

query  {
  getCharacter(id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8") {
    id
    name
    alternate_names
    house {
      name
      characters {
        name
      }
      
    }
    
  }
}


*/