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
`

const Header = styled.h1`
    font-size: 5vw;
    color: #a0af22;
    font-style: oblique;
    margin-top: 2vw;
`

const SmallText = styled.p`
    font-size: 2vw;
    color: black;
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
