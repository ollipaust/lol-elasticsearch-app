import React from 'react'
import { Container } from './Layout.css'
import Header from '../Header/Header'

const Layout = ({ children, currentTags, setTags }) => {
  return (
    <Container>
      <Header currentTags={currentTags} setTags={setTags} />
      {children}
    </Container>
  )
}
export default Layout
