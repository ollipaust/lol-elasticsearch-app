import styled from 'styled-components'
import {
  accent,
  light,
  fighter,
  mage,
  tank,
  support,
  assassin,
  marksman,
} from '../../constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'searchbar-wrapper',
})`
  position: fixed;
  padding: 2rem;
  height: calc(100vh - 50px - 2rem);
  width: calc(20vw + 2rem);

  &:after {
    content: '';
    position: absolute;
    right: 0px;
    top: 2rem;
    height: calc(100% - 3rem);
    width: 1px;
    background: ${accent};
  }

  .search-bar {
    margin: 0 0 50px;
  }
  .search-input {
    width: 350px;
    height: 42px;
    border: 1px solid ${accent};
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 2rem;
    font-size: 0.75rem;
    font-weight: bold;
  }
  .classes {
  }
  .tags {
    display: inline-block;
    margin: 10px;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;

    a {
      color: ${light};
    }

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

    &:hover {
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 25px;
  }
`

export const LogoContainer = styled.div.withConfig({
  displayName: 'logo-container',
})`
  img {
    width: 100%;
  }

  p {
    margin: 0 0 25px 0;
  }
`
