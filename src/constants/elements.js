import styled from 'styled-components'
import { accent, accentGradient150, dark, light } from './colors'

export const StyledButton = styled.a.withConfig({
  displayName: 'MoreButton',
})`
  display: inline-flex;
  place-content: center;
  position: relative;
  text-align: center;
  background: transparent;
  border-radius: 0.25em;
  border-width: 2px;
  border-style: solid;
  border-color: ${accent};
  margin-top: 2vmax;
  padding: 10px 15px;
  overflow: hidden;
  text-decoration: none;
  pointer-events: all;

  @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
    padding: 7.5px 12.5px !important;
    display: block !important;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    padding: 7.5px 12.5px !important;
  }

  span {
    color: ${light};
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color 350ms ease 175ms;

    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      font-size: 0.75rem;
    }
    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      font-size: 0.66rem;
    }
  }

  :hover,
  :active {
    span {
      color: ${dark};
      transition: color 350ms ease 100ms;
    }
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 200px;
    background: ${accentGradient150};
    z-index: -1;
    transform: translateY(0%) translateZ(0);
    transition: transform 500ms ease-in-out 50ms;
  }
  :hover::after,
  :active::after {
    transform: translateY(-100%) translateZ(0);
    transition: transform 500ms ease-in-out 0ms;
  }
`
