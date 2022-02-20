import React from 'react';
import styled from 'styled-components';
import { mobile } from "../Screens/mobile"

const Container = styled.div`
height: 60vh;
margin: 3rem;
${mobile({ margin: "0", height:"125vh"})}
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
    justify-content: space-around;
`
const H1Text = styled.h1`
    width: 50%;
    ${mobile({ width:"100%"})}
`
const StoriesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const StoryContainer = styled.div`
margin: 1.5rem;
padding: 1rem;
width: 64vh;
height: 16vh;
border-radius: 9px;
background-color: rgba(184, 195, 249, 0.2);
${mobile({width:"100%", height:"10vh"})}
`
const StoryText = styled.p`
display: flex;
flex-direction: column;
align-items: center;
font-size: 13px;
padding-left: 5rem;
padding-right: 5rem;
${mobile({ paddingLeft:"0", paddingRight:"0"})}
`
const UserNames = styled.a`
font-size: 13px;
color: #0011ff;
`
const QuoteContainer = styled.div`
display: flex;

`
const Blockquote = styled.q`

`


const UserStories = () => {
return <Container>
    <TextContainer>
    <H1Text>See what our users have to say</H1Text>
    <StoriesContainer>
        <StoryContainer>
        <QuoteContainer>
        <StoryText><Blockquote>Investing is one of the most effective ways to build wealth and 
            now you with little money to do it, thans to kolo.</Blockquote></StoryText>
        </QuoteContainer>
        <UserNames>-Mrs Funmi Oyekunle</UserNames>
        </StoryContainer>

        <StoryContainer>
        <StoryText><Blockquote>I recently learn about the stock market and started investing with kolo,
            it’s been a fun ride love it.</Blockquote></StoryText>
        <UserNames>-Mr Uche Akpan</UserNames>
        </StoryContainer>

        <StoryContainer>
        <StoryText><Blockquote>With kolo, I was able to save up enough money to treat myself well during this detty
            december.</Blockquote></StoryText>
        <UserNames>-Miss Angel Irabor</UserNames>
        </StoryContainer>

        <StoryContainer>
        <StoryText> <Blockquote>Kolo is a very amazing app. It felt tough at first to always save, but now.. 
            I’m a proud business owner.</Blockquote></StoryText>
        <UserNames>-Dr Fatai Hassan</UserNames>
        </StoryContainer>
    </StoriesContainer>
    </TextContainer>

</Container>;
};

export default UserStories;
