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


    return (
        <div>
            {characterDetail.name ? (
                <>
                    <div>
                        <h4>Name: {characterDetail.name}</h4>
                        <h4>Species: {characterDetail.species}</h4>
                        <h4>Status: {characterDetail.status}</h4>
                        <h4>Origin: {characterDetail.origin?.name}</h4>
                        <h4>Location: {characterDetail.location?.name}</h4>
                    </div>

                    <div>
                        <img src={characterDetail.image} alt={characterDetail.name} />
                    </div>
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
}

export default Personaje;
