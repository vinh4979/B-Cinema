import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { navBarLink } from 'src/utils/constants'
import styled from 'styled-components'

const NavLinkItems = styled.ul`
  list-style: none;
`
const LinkItem = styled.li`
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  transition: var(--transition);
  border-radius: var(--radius);
  padding: 1rem;
  &:hover {
    background-color: var(--color-redNetflix);
  }
`

export default function NavLinks() {
  return (
    <NavLinkItems>
      {navBarLink.map(item => {
        return (
          <HashLink key={item.id} smooth to={`${item.goTo}${item.path}`}>
            <LinkItem>
              <span>{item.title}</span>
            </LinkItem>
          </HashLink>
        )
      })}
    </NavLinkItems>
  )
}
