import React from 'react';
import './App.css';
import { Route } from 'react-router';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import Favoritos from './Components/Favoritos/Favoritos';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Personaje from './Components/Personaje/Personaje';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' component={Favoritos} />
            <Route path='/character/:id' component={Personaje} />
            <Route path='/create/character' component={CreateCharacter}/>
        </div>
    );
}

export default App;
