import React from 'react';

export default function StarWars (props) {
    const characterList = props.characters.map (char => {
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