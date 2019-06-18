// ---------- nagłowek aplikacji ----------

import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import actions from '../../redux/actions/actions'

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


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            money: 0,
            earned: true,
        };

        this.moneyInput= React.createRef(); // input pieniądze
        this.nameInput= React.createRef() // input  nazwa
        
    }

    // -- obsługa formularzy --

    changeValue = (e, field) => {

        this.setState({ [field]: e.target.value })

    }

    changeType = () => {

        this.setState({ earned: !this.state.earned })

    }

    // -- zatwierdzenie nowej operacji --

    addOperation = (e)=>{
        e.preventDefault();
        let d= new Date;
        let date={
            day: this.addZero(d.getDate()),
            month: this.addZero(d.getMonth()),
            year: d.getFullYear()
        }
        let get = this.state.earned?'+':'-';
        
        this.props.add({
            name: this.state.name,
            price: this.state.money,
            date: date,
            get: get
        })

        // zerowanie inputów
        this.moneyInput.current.value= 0;
        this.nameInput.current.value= '';
    }

    // -- formatowanie daty --

    addZero = (number) =>{
        if(String(number).length== 1)
            return `0${number}`
        
        else return number;
    }

    render() {
        return (
            <Container>
                <Header>NEW OPERATION</Header>
                <Center>
                    <OneSide>

                        <Inputs><p>Description</p><Input onChange={(e)=>this.changeValue(e,'name')} ref={this.nameInput} name='name' type='text'></Input></Inputs>
                        <Inputs><p>Money  </p><Input onChange={(e)=>this.changeValue(e,'money')} ref={this.moneyInput}  name='name' min={0} type='number'></Input></Inputs>

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
                <Button onClick={this.addOperation}>+</Button>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    add: action=> dispatch(actions.add(action))
})

export default connect(null, mapDispatchToProps)(FormComponent)