import React from 'react';
import './App.css';
import { Route } from 'react-router';
import CreateCharacter from './Components/CreateCharacter';
import Favorites from './Components/Favorites';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Character from './Components/Character';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/character/:id' component={Character} />
            <Route path='/create/character' component={CreateCharacter}/>
        </div>
    );
}

export default App;
