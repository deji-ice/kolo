import React from 'react';
import styled from 'styled-components';
import { mobile } from "../Screens/mobile"

const Container = styled.div`
height: 60vh;
background-color: rgba(218, 228, 254, 0.5);
margin: 4rem;
margin-top:10rem;

${mobile({margin:"0rem", height:"60vh", alignItems:"center"})}
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
    justify-content: space-around;
    ${mobile({ padding:"29px", justifyContent:"none", marginTop:"1rem"})}
`
const H1Text = styled.h1`
    font-size: 45px;
    width: 50%;
    ${mobile({ width:"100%", margin:"5px"})}
`
const Ptext = styled.p`
    font-size: 14px;
    width: 60%;
    ${mobile({ width:"78%", textAlign:"center"})}
`

const KoloBudgets = () => {
  return <Container>
      <TextContainer>
        <H1Text>Kolo budgets, saves, and invests for you</H1Text>
        <Ptext>Our goal is to investing your money as an African effortless. With the click of one button, 
            you can create a smooth path for your future with investing
            in top businesses and stocks around the world while at the same time saving money for the rainy day.</Ptext>
      </TextContainer>
  </Container>;
};

export default KoloBudgets;
