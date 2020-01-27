import React from 'react';
import myHOC from './MyHOC';

function StarWars (props) {
    const characterList = props.data.results.map (char => {
        return (
            <div key={char.name} className='star-wars-char'>
                <h2>Name: {char.name}</h2>
                <h3>Heigth: {char.height}</h3>
                <h3>Mass: {char.mass}</h3>
            </div>
        )
    })
    return (
        <div>{characterList}</div>
    )
}

export default myHOC(StarWars, 'https://swapi.co/api/people');