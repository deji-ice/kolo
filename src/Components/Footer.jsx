import React from 'react';
import styled from 'styled-components';
import {ReactComponent as KoloLogo} from '../Images/kolo-logo.svg';
import Stores from '../Images/pngegg.png';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { mobile } from "../Screens/mobile"



const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column'})}

`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20px;
`
const Logo = styled.h1`
    font-weight: 900;
    font-style: italic;
`
const Center = styled.div`
    flex: 1;
    margin-right: 4rem;
    padding: 20px;
    display: flex;
    font-size: 13px;
    justify-content: space-between;

`
const Title = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`
const List = styled.ul`

  list-style: none;

`

const ListItems = styled.li`
text-align: left;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 500;
`
const Right = styled.div`
    flex: 0.8;
    padding: 20px;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const LogosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const IconsContainer = styled.div`
margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    width: 100px;
    align-self: center;
`
const Icon = styled.span`
    height: 23px;
    cursor: pointer;
`
const Image = styled.img`
  height: 96px;
  width: 127px;
  cursor: pointer;
`
const Title1 = styled.p`
  margin-bottom: 20px;
  font-size: inherit;
  font-weight: bold;
`
const Footer = () => {
  return(
<Container>
    <Left><Logo><KoloLogo/></Logo>
    </Left>

    <Center>
        <List>
        <Title>Legal</Title>
        <ListItems>Terms</ListItems>
        <ListItems>Privacy Policy</ListItems>
        <ListItems>Security</ListItems>
        </List>

        <List>
        <Title>Company</Title>
        <ListItems>About</ListItems>
        <ListItems>Careers</ListItems>
        <ListItems>Features</ListItems>
        <ListItems>Help</ListItems>
        <ListItems>FAQs</ListItems>
        </List>

        <List>
        <Title>Product</Title>
        <ListItems>Kolo</ListItems>
        <ListItems>Savings</ListItems>
        <ListItems>Invest</ListItems>
        <ListItems>Pricing</ListItems>
        </List>
    </Center>

    <Right>
    <Title1>Get the app</Title1>
        <LogosContainer>
        <Image src={Stores} alt="Google"/>
        </LogosContainer>
        <IconsContainer>
        <Icon><BsFacebook size="2xs"/></Icon>
        <Icon><AiFillTwitterCircle size="xs"/></Icon>
        <Icon><AiFillInstagram size="xs"/></Icon>
        </IconsContainer>
    </Right>
        </Container>
);
};

export default Footer;
