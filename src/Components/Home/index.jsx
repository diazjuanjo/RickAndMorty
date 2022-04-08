import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharacters, addFavorite } from '../../redux/actions';

class Home extends Component {
    componentDidMount() {
        this.props.getCharacters();
    }
    render() {
        return (
            <div>
                <h1>Ricky & Morty</h1>
                <h2>Personajes</h2>
                {this.props.characters?.map(character => (
                    <div key={character.id}>
                        <div>
                            <Link to={`/character/${character.id}`}>
                                <h3>Nombre:{character.name}</h3>
                            </Link>
                            <button
                                onClick={() =>
                                    this.props.addFavorite(character)
                                }
                            >
                                Agregar a favoritos
                            </button>
                        </div>
                        <ul style={{listStyleType:"none"}}>
                            <li>Status:{character.status}</li>
                            <li>Species:{character.species}</li>
                        </ul>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        favorites: state.favoriteCharacters,
    };
};

export default connect(mapStateToProps, { getCharacters, addFavorite })(Home);
