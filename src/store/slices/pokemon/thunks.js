import { pokemonApi } from "../../../api/pokemonApi"
import { startLoadingPokemons, setPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) =>{

    return async (dispatch,) => {
        dispatch(startLoadingPokemons())

        // TODO :  realizar petición http
        // const resp  = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page*20}`)
        // const data = await resp.json()

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
        console.log(data.results);
        
        dispatch(setPokemons({pokemons : data.results, page: page + 1}))
    }

}