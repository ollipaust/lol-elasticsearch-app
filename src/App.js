import React, { Component } from 'react'
import ReactiveBaseWrapper from './components/ReactiveBase/ReactiveBase'
import Results from './components/Results/Results'
import DataSearchBar from './components/DataSearchBar/DataSearchBar'

import Layout from './components/Layout/Layout'
import { GlobalStyles } from './constants/global.css'

class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyles />
        <ReactiveBaseWrapper>
          <DataSearchBar />
          <Results />
        </ReactiveBaseWrapper>
      </Layout>
    )
  }
}
export default App
