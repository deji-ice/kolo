import React from 'react';
import styled from 'styled-components';
import {ReactComponent as KoloLogo} from '../Images/kolo-logo.svg';
import { mobile } from "../Screens/mobile"



const Container = styled.div`
height: 60px;
${mobile({ marginBottom: "10px", 
            display:"flex",
            flexWrap:"nowrap"
            
  })}

`;
const Wrapper = styled.div`
padding: 0px 50px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: '0px', marginLeft:"20px", justiftyContent:"space-around"})}
`
const Left = styled.div`
${mobile({ margin: "0px", width:"40px"})}
flex: 1;
display: flex;
align-items: center;
margin: 10px;
`

const SignInContainer = styled.div`
    border: 0.5px solid darkgrey;
    display: flex;
    align-items: center;
    margin-left: 9px;
    padding: 10px;
    font-size: small;
    border-radius: 9px;
    font-weight: 500;
    cursor: pointer;
    ${mobile({ fontSize: '10px', marginLeft:"9px", padding:"2px", borderRadius:"4px"})}
`
const CreateAccountContainer = styled.div`
    border: 0.5px solid darkgrey;
    display: flex;
    align-items: center;
    margin-left: 17px;
    padding: 10px;
    font-size: small;
    border-radius: 9px;
    background-color: #0f0f0f;
    color: white;
    cursor: pointer;
    ${mobile({ fontSize: '9px', padding:"2px", borderRadius:"4px"})}
`
const Center = styled.div` 
flex: 1;
justify-content:center ;
text-align: center;
display: flex;
${mobile({ margin:"1rem"})}
`
const Right = styled.div` 
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
margin-left: 10px;
${mobile({flexDirection:"column", marginLeft:"0px", margin:"1rem"})}
`
const Menu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    font-weight:500;
    ${mobile({ fontSize: '12px', marginLeft:"15px"})}
`

const NavBar = () => {
  return <Container>
      <Wrapper> 
      <Left><KoloLogo/></Left>
      <Center>
        <Menu>Save</Menu>
        <Menu>Invest</Menu>
        <Menu>Careers</Menu>
        <Menu>FAQs</Menu>
      </Center>
      <Right>
    <SignInContainer>Sign in</SignInContainer> 
    <CreateAccountContainer>Create free account</CreateAccountContainer> 
      </Right>
      </Wrapper>
      </Container>;
};

export default NavBar;
