import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const UnorderedList = styled.ul`
  list-style: none;
  float: right;
`
const ListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
  list-style: none;
  text-decoration: none;
`
const BrandLink = styled(Link)`
  text-shadow: none;
  background-image: none;
`
const NavLayout = styled.div`
  padding: 1.5rem;
  background: lightgray;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`
const NavHeader = styled.header`

`

const NavBrand = props => (
  <BrandLink>
    <Link to={props.to}>
      <h3 style={{ display: `inline` }}>{props.children}</h3>
    </Link>
  </BrandLink>
)
const ListLink = props => (
  <ListItem>
    <Link to={props.to}>{props.children}</Link>
  </ListItem>
)

export default function Navbar({ children }) {
  return (
      <NavLayout data-sal="fade" data-sal-duration="200">
        <NavHeader>
          <NavBrand to="/">KSO</NavBrand>
          <UnorderedList>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </UnorderedList>
        </NavHeader>
        {children}
      </NavLayout>
  )
}