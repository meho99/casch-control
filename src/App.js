import React, { Component } from 'react';
import styled from 'styled-components'

import HeaderContainer from './components/Header'
import FormComponent from './components/Forms'
import HistoryContainer from './components/History'
import SummaryContainer from './components/Summary'
import rootReducer from './reducers'

// ---------- style ----------
const BesideContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
`

const UnderContainer = styled.div`
  display: flex;
  flex-direction: column;
`


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />

        <BesideContainer>

          <UnderContainer>

            <FormComponent />
            <SummaryContainer />

          </UnderContainer>

          <HistoryContainer />

        </BesideContainer>

      </div>
    )
  }
}
