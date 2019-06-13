// ---------- nagłowek aplikacji ----------

import React, { Component } from 'react';
import styled from 'styled-components';

// ----- ikonki -----

import DownIcon from './assets/down.png'
import UpIcon from './assets/up.png'

// ----- style -----

const Container = styled.div`
    margin: 1vw;
    width: 50vw;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
    border-radius: 5%;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
`
const Center = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const OneSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
`

const PlusText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TypeDiv = styled.div`
    border-bottom: 0.5vw solid ${props=> props.earned ? '#a0af22' :'#990000'} ;
    border-radius: 50%;
    width: 8vw;
    font-size: 1.6vw;
    padding: 0.5vw;
    margin-left: 2vw;
    cursor: pointer;
    text-align: center;
`

const Icon = styled.img`
    width: 2vw;
    height: 2vw;
    margin: 0.5vw;
`

const Header = styled.h1`
    background-color: #1a1a1d;
    width: 50%;
    text-align: center;
    color: #c5c6c7;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    border-bottom: 0.2vw solid #a0af22;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    width: 60%;
    background-color: #c5c6c7;
    border: none;
    text-align: center;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    font-size: 1vw;
`

const Button = styled.button`
    background-color: #1a1a1d;
    width: 20%;
    text-align: center;
    color: #c5c6c7;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    border-bottom: 0.2vw solid #a0af22;
    cursor: pointer;
    margin-top: 2vw;
`

// ----- komponent -----


export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            money: 0,
            earned: true,
        };

    }

    // -- obsługa formularzy --

    changeValue = (e, field) => {
        this.setState({ field: e.value })
    }

    changeType = () => {
        this.setState({ earned: !this.state.earned })
    }

    render() {
        return (
            <Container>
                <Header>NEW OPERATION</Header>
                <Center>
                    <OneSide>

                        <Inputs><p>Description</p><Input name='name' type='text'></Input></Inputs>
                        <Inputs><p>Money  </p><Input name='name' type='number'></Input></Inputs>

                    </OneSide>
                    <OneSide>

                        <PlusText onClick={this.changeType}>
                            Type:
                            {
                                this.state.earned
                                    ?
                                    <TypeDiv earned={true}>
                                        Earnings
                                <Icon src={UpIcon} alt='down' />
                                    </TypeDiv>
                                    :
                                    <TypeDiv earned={false}>
                                        Expense
                                <Icon src={DownIcon} alt='up' />
                                    </TypeDiv>
                            }
                        </PlusText>

                    </OneSide>

                </Center>
                <Button>+</Button>
            </Container>
        );
    }
}
