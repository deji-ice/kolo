import React from 'react';
import styled from 'styled-components';
import Deloitte from '../Images/deloitte-seeklogo.com.svg';
import Google from '../Images/Google-Logo.wine.svg';
import IBm from '../Images/ibm-logo.svg';
import { mobile } from "../Screens/mobile"

const Container = styled.div`
display: flex;
flex-direction: column;
background: rgba(245, 245, 245, 1);
margin-top: 10rem;
align-items: center;
justify-content: space-around;
padding-bottom: 5rem;
${mobile({ width:"100vw"})}
`
const H1Text = styled.h1`
    margin-top: 3rem;
    font-size: 28px;

`
const LogoContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0px;
${mobile({height:"50px", width:"100vw", background:"red" })}
`
const Image = styled.img`
  height: 120px;
  width: 150px;
margin: 0px 24px;
color: ${props => props.color}
${mobile({margin:"0px 0px", height:"20px", width:"20px" })}
`

const Partners = () => {
  return <Container>
      <H1Text>We have partnered with</H1Text>
      <LogoContainer>
        <Image src={Google} alt="Google"/>
        <Image src={Deloitte} alt="Deloitte"/>
      </LogoContainer>
  </Container>;
};

export default Partners;