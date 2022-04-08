import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavorite } from '../../redux/actions'
 
function Favoritos() {
    let favorites = useSelector(state => state.favoriteCharacters) 
    const dispatch = useDispatch()   
    
    return (
        <div>
           {
               favorites?.map(char => (
                   <div key={char.id}>
                       <Link to={`/character/${char.id}`}>
                            <h3>{char.name}</h3>
                        </Link>
                        <button onClick={() => dispatch(removeFavorite(char.id))}>No te quiero mas</button>
                   </div>
               ))
           }
        </div>
    )
}

export default Favoritos
