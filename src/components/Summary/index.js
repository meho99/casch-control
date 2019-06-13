import React, { Component } from 'react';
import styled from 'styled-components'

// ---------- style ---------

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 20vw;
    margin: 1vw;
    border-radius: 5%;
    background-color: #f2f2f2;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
`
const Header = styled.h1`
    align-self: center;
    background-color: #1a1a1d;
    width: 50%;
    text-align: center;
    color: #c5c6c7;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    border-bottom: 0.2vw solid #a0af22;
`

// ---------- komponent ----------

class SummaryContainer extends Component {
    render() {
        return (
            <Container>
                <Header>SUMMARY</Header>
            </Container>
        );
    }
}

export default SummaryContainer;