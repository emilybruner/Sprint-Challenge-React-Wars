import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardInfo from "./CardInfo"


const CharacterCard = () => {
    const [character, setCharacter] = useState([]);
    console.log(character);

    useEffect(() => {
        axios
            .get('https://lambda-swapi.herokuapp.com/api/people/ ')
            .then(response => {
                console.log("it worked", response.data.results);
                setCharacter(response.data.results)
            })
            .catch(error => {
                console.log("error", error);
            });
    }, []);


    return (
        <div>
            {character.map(item => {
                return <CardInfo
                    key={item}
                    title={item.name}
                    mass={item.mass}
                    height={item.height}
                    eyecolor={item.eye_color}
                />
            })}

        </div>
    );
};

export default CharacterCard;