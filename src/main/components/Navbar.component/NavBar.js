import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from 'src/App'
import Logo from 'src/assets/img/logo-full.png'
import { OPEN_MODAL_COMFIRM } from 'src/redux/types/type'
import { NavCss } from 'src/utils/mixin'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const Container = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  .nav__scrollDown {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  z-index: 1000;
  background-color: rgba(300, 300, 300, 0.1);
  transition: var(--transition);
`
const Nav = styled.div`
  ${NavCss()}
  width: 90%;
  margin: 0 auto;
`
const NavLogo = styled.div``
const ImgLogo = styled.img`
  max-width: 4rem;
  height: 3rem;
  margin: 0 1rem;
`
const NavLogin = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: var(--gap);
  color: var(--color-gray-700);
  justify-content: center;
  align-items: center;
  .nav_login--title {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    color: var(--color-white);
  }
  .signIn {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: -0.5rem;
      background-color: var(--color-gray-700);
      height: 100%;
      width: 1px;
    }
  }
`

export default function NavBar() {
  const dispatch = useDispatch()
  // data login from localStorage
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { isLocalStorageSTT } = useSelector(state => state.AuthStatusReducer)

  const { isLoginSuccess } = useSelector(state => state.AuthStatusReducer)

  const handleLogOut = () => {
    dispatch({
      type: OPEN_MODAL_COMFIRM,
      isModalShow: true
    })
  }

  // Scroll down animation
  const [isSideBarScroll, setIsSideBarScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsSideBarScroll(true)
      } else {
        setIsSideBarScroll(false)
      }
      return () => {
        window.removeEventListener('scroll')
      }
    })
  }, [isSideBarScroll])

  return (
    <Container>
      <NavbarContainer className={`${isSideBarScroll && 'nav__scrollDown'}`}>
        <Nav>
          <NavLogo>
            <ImgLogo src={Logo} alt="logo" />
          </NavLogo>
          <NavLinks>
            <NavLinks />
          </NavLinks>
          <NavLogin>
            <FaUser />
            {isLocalStorageSTT || isLoginSuccess ? (
              <>
                <button
                  onClick={() => {
                    history.push('/profile')
                  }}
                  className="nav_login--title signIn"
                >
                  {userLogin.hoTen}
                </button>
                <button type="button" className="btn" onClick={handleLogOut}>
                  LOG OUT
                </button>
              </>
            ) : (
              <>
                <Link className="nav_login--title btn2 " to="/signin">
                  Login
                </Link>
                <Link className="nav_login--title btn" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </NavLogin>
        </Nav>
      </NavbarContainer>
    </Container>
  )
}
