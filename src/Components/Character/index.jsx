import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersDetail, clearPage } from '../../redux/actions';

function Personaje() {
    
    const {id} = useParams()

    const dispatch = useDispatch()

    const {characterDetail} = useSelector(state => state)
    
    useEffect(() => {
        dispatch(getCharactersDetail(id))

        return () => {
            dispatch(clearPage())
        }
    }, [dispatch, id]);

    const { name, species, status, origin, location, image } = characterDetail


    return (
        <div>
            {name ? (
                <>
                    <div>
                        <h4>Name: {name}</h4>
                        <h4>Species: {species}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Origin: {origin?.name}</h4>
                        <h4>Location: {location?.name}</h4>
                    </div>

                    <div>
                        <img src={image} alt={name} />
                    </div>
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
}

export default Personaje;
