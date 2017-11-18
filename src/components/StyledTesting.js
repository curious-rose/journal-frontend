import React, { Component } from 'react';
import styled from 'styled-components';
import blueBeige from '../images/bluebeige.jpg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url('/static/media/bluebeige.dd97c287.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  ${'' /* min-height: 100vh;
  width: 100%;
  background: black;
  color: #fff; */}
`;

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5em;
color: black;
`;

const Box = styled.div`
position: absolute;
    bottom: 16%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;

const Div = styled.div`
  position: absolute;
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;


export default class StyledTesting extends Component {
  render() {
    return (
      <Wrapper>
      <Div>
      	<Title>Welcome to Noctjournal</Title>
        <div>
        <Link to="/createaccount"><Button inverted color='yellow'>Create Account</Button></Link>
          <Link to="/login"><Button>Log In</Button></Link>
        </div>
        </Div>
      </Wrapper>
    )
  }
}