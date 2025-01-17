import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Header = () => {
  // const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    window.location.reload()
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ShopKart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      <i className='fas fa-user'></i> Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}><i className='fas fa-sign-out'></i> Logout</NavDropdown.Item>
                </NavDropdown>
              ) : <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
