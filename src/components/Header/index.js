// ---------- nagłowek aplikacji ----------

import React from 'react';
import styled from 'styled-components';

// ----- style -----

const Container = styled.div`
    width: 100vw;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    background-color: #1a1a1d;
    border-bottom: 0.2vw solid #a0af22;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
    margin-bottom: 2vw;
`

const Header = styled.h1`
    font-size: 4vw;
    color: #a0af22;
    font-style: oblique;
`

const SmallText = styled.p`
    font-size: 1.5vw;
    color: #c5c6c7;
    margin-bottom: 1vw;
`

// ----- komponent -----

const HeaderConatainer = () =>
    <Container>
        <Header>
            Cash Control App
        </Header>
        <SmallText>
            Control your expenses and earnings with one app
        </SmallText>
        
    </Container>

export default HeaderConatainer
