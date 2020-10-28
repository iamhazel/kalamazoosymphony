import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const BaseDiv = styled.div`
  margin: 3rem auto;
  max-width: 850px;
  padding: 0 1rem;
  min-height: 1600px;
`

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider location={location}>
      <TransitionViews>
        <div>
          <Navbar></Navbar>
          <BaseDiv>{children}</BaseDiv>
        </div>
      </TransitionViews>
    </TransitionProvider>
  )
}

export default Layout
