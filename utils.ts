

import { Character, House } from "./types.ts";

// es como si fuese un bucle infinito, donde de house pasas a characters y de characters a house

export const fetchHouseByName = async (name: string): Promise<House | null> => {
    const all = await fetchAllCharacters();
    const characters = all.filter((c) => c.house && c.house.name === name);
    if (characters.length === 0) return null;
    return { name, characters };
};

export const fetchAllCharacters = async (): Promise<Character[]> => {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    if (!res.ok) return [];
    const data = await res.json();

    return data.map((e:any)=>({
        id:e.id,
        name:e.name,
        alternate_names:e.alternate_names,
        species: e.species||"Desconocido",
        gender: e.gender||"Desconocido",
        house: e.house?{name: e.house,characters:[]}:null

    }))
    
}

export const fetchCharacterById=async (id:string) : Promise<Character | null> =>      {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
    

    if(!res.ok) return null;

    const data= await res.json()

    if(!Array.isArray(data||data[0])) return null;

    const e=data[0]
     return{
        id: e.id,
        name: e.name,
        alternate_names: e.alternate_names || [],
        species: e.species || "Desconocido",
        gender: e.gender || "Desconocido",
        house: e.house ? { name: e.house, characters: [] } : null,

     }



}

export const fetchCharacterByIds=async(ids:string[]):Promise<Character[]>=>{
    const all = await fetchAllCharacters();
    return all.filter((c)=>ids.includes(c.id))
}
