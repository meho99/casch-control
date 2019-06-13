// --------------- KOMPONENT POJEDYNCZEGO ITEMA Z HISTORI ---------------

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// ---------- style ----------

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    background-color: #c5c6c7;
    border: none;
    text-align: center;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    justify-content: space-around;
    border-bottom:0.2vw solid ${props=>props.type==='+'? '#a0af22' : '#990000'};
    margin: 0.5vw;
`

const Field = styled.div`
    color: #1a1a1d;
    font-size: 1vw;
    
`

// ---------- komponent ----------

const ItemComponent = props => {
    return (
        <Container type={props.type}>
            <Field>{props.name}</Field>
            <Field>{props.type+ props.price}</Field>
            <Field>{props.date}</Field>
        </Container>
    );
};
ItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ItemComponent;