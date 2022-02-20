import React from 'react';
import styled from 'styled-components';
import wallpaper from '../Images/phone.png'
import { mobile } from "../Screens/mobile"

const Container = styled.div`
width: 100%;
height: 100vh;
margin-top:4rem;
${mobile({ height: "10%", })}
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({margin:"3rem" })}
`
const TextContainer = styled.div`
    width: 35%;
    ${mobile({ width:"100%"})}
`
const H1Text = styled.h1`
    font-size: 45px;
    margin: 0px;
    ${mobile({fontSize:"45px" })}
`
const Ptext = styled.p`
    font-size: 13px;
    ${mobile({marginBottom:"1rem", fontSize:"11px" })}
`
const ImageContainer = styled.div`
    display: flex;
    object-fit: contain;
    height: 40rem;
    margin: 2rem;
    ${mobile({height:"220px", widt:"200px", objectFit:"contain" })}
`
const Image = styled.img`
    height: 98%;
    object-fit: contain;
    width: 800px
    ${mobile({ height:"50px", width:"100px", objectFit:"contain"})}
`

const PhoneBG = () => {
return <Container>
    <Wrapper>
        <TextContainer>
            <H1Text>Your very own virtual piggy bank.</H1Text>
            <Ptext>We assist you in achieving financial independence through <br/>savings and investment oppurtunities</Ptext>
        </TextContainer>
        <ImageContainer>
            <Image src={wallpaper}/>
        </ImageContainer>
    </Wrapper>
</Container>;
};

export default PhoneBG;
