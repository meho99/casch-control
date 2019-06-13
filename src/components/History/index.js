import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

import ItemComponent from './item'
// ---------- style ---------

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
    height: 40vw;
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
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// ---------- komponent ---------

class HistoryContainer extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <Container>
                <Header>HISTORY OF YOUR OPERATIONS</Header>
                <List>
                    {
                        this.props.actions.list.map((item, index)=>
                            <ItemComponent key={index} name={item.name} type={item.get} price={Number(item.price)} date={item.date.day+'-'+item.date.month+'-'+item.date.year}/>
                        )
                    }
                </List>
                
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    actions: state.actions
})

export default connect(mapStateToProps, {} )(HistoryContainer);