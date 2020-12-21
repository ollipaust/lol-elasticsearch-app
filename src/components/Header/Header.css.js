import styled from 'styled-components'
import { accent } from '../../constants/colors'

export const Container = styled.header.withConfig({
  displayName: 'Header',
})`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: ${accent};
  padding: 1rem;
  width: 100%;
  height: 50px;
  z-index: 3;

  .title {
    display: flex;
    place-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
  }
`
