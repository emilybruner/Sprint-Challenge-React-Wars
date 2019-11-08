import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 5%;
`
const PhotoCard = styled.div`
background: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;
opacity: .6;
width: 300px;
height: 400px;
`;

const CardH2 = styled.h2`
font-size: 2rem;
color: orange;
`;

const CardH4 = styled.h4`
font-size: 1.5rem;
`

const CardText = styled.p`
max-width: 300px;
font-size: 1.2rem;
`;


const CardInfo = (props) => {
    return (

        <div>
            <CardContainer>
                <PhotoCard>
                    <CardH2>{props.title}</CardH2>
                    <CardH4>Stats</CardH4>
                    <CardText>Weight: {props.mass}kg</CardText>
                    <CardText>Height: {props.height}cm</CardText>
                    <CardText>Eye Color: {props.eyecolor}</CardText>
                </PhotoCard>
            </CardContainer>
        </div>
        // <div>
        //     <h3>{props.title}</h3>
        //     <p>{props.height}</p>
        //     <p>{props.eyecolor}</p>
        // </div>
    )
}


export default CardInfo;