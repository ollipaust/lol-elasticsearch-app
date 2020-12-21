import React from 'react'
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch'
import { ResultsContainer, Card } from './Results.css'
import { StyledButton } from '../../constants/elements'

const onResultStats = (results, time) => {
  return (
    <p>
      {results} Champions found in {time}ms
    </p>
  )
}
const onData = (data) => (
  <Card key={data.id}>
    <img src={data.icon} alt={`${data.name}-icon`} />
    <h1>
      {data.name} - {data.title}
    </h1>
    <div className="classes">
      {data.tags.map(function (index) {
        return (
          <span className={`tags` + ' ' + index.toLowerCase()} key={index}>
            {index}
          </span>
        )
      })}
    </div>
    <p className="description">{data.description}</p>
    <StyledButton
      href={`https://na.leagueoflegends.com/en-us/champions/${data.name.toLowerCase()}/`}
      target="_blank"
      title={`Learn more about ${data.name}`}
    >
      <span>More about {data.name}</span>
    </StyledButton>
  </Card>
)
const Results = ({ toggleTopic, currentTopics }) => {
  return (
    <ResultsContainer>
      <SelectedFilters className="selected-filters" />
      <ReactiveList
        componentId="results"
        dataField="name"
        onData={onData}
        onResultStats={onResultStats}
        react={{
          and: ['champion'],
        }}
        pagination
        className="results"
        innerClass={{
          list: 'result-list-container',
          pagination: 'result-list-pagination',
          resultsInfo: 'result-info',
          noResults: 'result-info',
          poweredBy: 'powered-by',
        }}
        size={6}
      />
    </ResultsContainer>
  )
}
export default Results
