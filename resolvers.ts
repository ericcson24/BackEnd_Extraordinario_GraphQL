import { fetchAllCharacters,fetchCharacterById,fetchCharacterByIds, fetchHouseByName } from "./utils.ts"

import { Character, House } from "./types.ts"



export const resolvers={

    Character:{
        house:(parent:Character)=>parent?.house?.name ? fetchHouseByName(parent.house.name):null

    },

    House:{
        characters:async(parent:House)=>{
            const all=await fetchAllCharacters()
            return all.filter(((c) => c.house && c.house.name === parent.name))


        }

    },


    Query:{
        getCharacter:(
            _:unknown,
            {id}:{id:string},
        )=>fetchCharacterById(id),

        getCharacters:(
            _:unknown,
            {ids}:{ids?:string[]},
        )=>ids ? fetchCharacterByIds(ids):fetchAllCharacters(),



    }


}