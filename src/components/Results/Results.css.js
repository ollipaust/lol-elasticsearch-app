import styled from 'styled-components'
import {
  accent,
  fighter,
  mage,
  tank,
  support,
  assassin,
  marksman,
} from '../../constants/colors'

export const ResultsContainer = styled.section.withConfig({
  displayName: 'results-container',
})`
  display: block;
  position: relative;
  width: 80%;
  float: right;

  .result-info {
    position: absolute;
    display: flex;
    place-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding-top: 15px;
    pointer-events: none;
    font-weight: bold;
    > p {
      width: 100%;
    }
  }

  .selected-filters {
    position: absolute;
    top: 0;
    left: 4rem;
    transform: translateY(100%);
  }
  .results {
    padding-top: 100px;

    & p {
      text-align: center;

      &.description {
        text-align: justify;
        margin-top: 25px;
      }
    }
  }
  .result-list-container {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    width: 100%;
  }
  .result-list-pagination {
    margin: 50px 0;
  }
  .powered-by {
    display: none;
  }
`
export const SearchBarContainer = styled.div.withConfig({
  displayName: 'searchbar-wrapper',
})`
  display: flex;
  place-content: center;
  flex-basis: 0;
  margin-top: 100px;

  .search-input {
    width: 420px;
    height: 42px;
    border: 1px solid ${accent};
  }
`
export const Card = styled.article`
  padding: 20px 0;
  margin: 15px;
  padding: 25px;
  border: 1px solid #eee;
  flex-basis: 400px;
  max-width: 400px;
  min-height: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  place-content: center flex-start;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h1 {
    font-size: 1.25rem;
    font-weight: bolder;
    margin: 10px auto;
  }

  p {
    font-size: 1rem;
  }

  img {
    width: 50%;
    margin: 0 auto 10px;
  }

  > [class*='MoreButton'] {
    align-self: center;
  }

  > .result-info {
    justify-content: center;
  }
  .classes {
    display: flex;
    place-content: center;
    width: 100%;
  }
  .tags {
    display: inline-block;
    margin: 3px;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    border-radius: 4px;

    &.fighter {
      background-color: ${fighter};
    }
    &.mage {
      background-color: ${mage};
    }
    &.tank {
      background-color: ${tank};
    }
    &.assassin {
      background-color: ${assassin};
    }
    &.support {
      background-color: ${support};
    }
    &.marksman {
      background-color: ${marksman};
    }
  }
`
