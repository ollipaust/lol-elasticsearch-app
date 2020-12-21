import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch'
import { Container, LogoContainer } from './DataSearchBar.css'
import LolLogo from '../../assets/lol-logo-rendered-hi-res.png'

const DataSearchBar = () => {
  return (
    <Container>
      <LogoContainer>
        <a
          href="http://leagueoflegends.com/"
          title="League of Legends Logo by Riot Games Inc."
          target="_blank"
        >
          <img src={LolLogo} />
        </a>
        <p>
          This is a simple Search App made with React, Styled-Components,
          appbase.io UI-Kit and{' '}
          <a href="https://www.elastic.co/" target="_blank">
            Elasticsearch
          </a>
          .
        </p>
      </LogoContainer>
      <h2>Search:</h2>
      <DataSearch
        componentId="champion"
        filterLabel="Search"
        dataField={['name', 'tags']}
        placeholder="Search Champions...    "
        autosuggest={false}
        iconPosition="left"
        className="search-bar"
        URLParams
        innerClass={{
          input: 'search-input',
        }}
      />
      <div className="classes">
        <h2>(Prototype) Filter by Classes:</h2>
        <div className="tags marksman">
          <a href={`?champion="marksman"`}>Marksman</a>
        </div>
        <div className="tags mage">
          <a href={`?champion="tank"`}>Mage</a>
        </div>
        <div className="tags tank">
          <a href={`?champion="tank"`}>Tank</a>
        </div>
        <div className="tags support">
          <a href={`?champion="support"`}>Support</a>
        </div>
        <div className="tags fighter">
          <a href={`?champion="fighter"`}>Fighter</a>
        </div>
        <div className="tags assassin">
          <a href={`?champion="assassin"`}>Assassin</a>
        </div>
      </div>
      <footer>
        Written by{' '}
        <a
          href="https://github.com/ollipaust"
          title="GitHub Profile"
          target="_blank"
        >
          Olli Paust
        </a>
      </footer>
    </Container>
  )
}

export default DataSearchBar
