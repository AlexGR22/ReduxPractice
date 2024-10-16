import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {

    const dispatch = useDispatch()

    const {pokemons, page, isLoading} = useSelector(state => state.pokemons)


    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    console.log(page);
    

    return(
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading... { isLoading ? "true" : "false" }</span>
            <ul>
                {/* pokemon list */}
                {pokemons.map (pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                )) }
            </ul>
            <button
                disabled = { isLoading }
                onClick = {()=>dispatch(getPokemons(page == 1 ? null :page-2 ))}
            >
                Back
            </button>
            <button
                disabled = { isLoading }
                onClick = {()=>dispatch(getPokemons(page))}
            >
                Next
            </button>

        </>
    )   
}

export { PokemonApp }