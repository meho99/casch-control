// ---------- nagłowek aplikacji ----------

import React, { Component } from 'react';
import styled from 'styled-components';

// ----- ikonki -----

import DownIcon from './assets/down.png'
import UpIcon from './assets/up.png'

// ----- style -----

const Container = styled.div`
    margin: 1vw;
    margin-top: 5vw;
    width: 60vw;
    border: 0.2vw solid #a0af22;
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
    background-color: #f2f2f2;
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
    border-bottom: 0.5vw solid black;
    border-radius: 50%;
    width: 8vw;
    font-size: 1.6vw;
    margin-left: 2vw;
    cursor: pointer;
`

const Icon = styled.img`
    width: 2vw;
    height: 2vw;
    margin: 0.5vw;
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
                <h1>NEW OPERATION</h1>
                <Center>
                    <OneSide>
                        <div>Name : <input name='name' type='text'></input></div>
                        <div>Money : <input name='name' type='number'></input></div>
                    </OneSide>
                    <OneSide>
                        <PlusText onClick={this.changeType}>
                            Type:
                            {
                                this.state.earned
                                    ?
                                    <TypeDiv>
                                        Earnings
                                <Icon src={UpIcon} alt='down' />
                                    </TypeDiv>
                                    :
                                    <TypeDiv>
                                        Expense
                                <Icon src={DownIcon} alt='up' />
                                    </TypeDiv>

                            }
                        </PlusText>
                        
                    </OneSide>

                </Center>
                <button>ADD</button>
            </Container>
        );
    }
}
