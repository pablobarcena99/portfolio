import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar bg='transparent' expand='lg' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>pablo.</Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar'
            onClick={() => setExpanded(true)}
            className='btn border-0'
          />
          <Navbar.Offcanvas
            show={expanded}
            onHide={setExpanded}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
            className='bg-dark'>
            <Offcanvas.Header closeButton className='btn-close-white'>
              <Offcanvas.Title id='offcanvasNavbarLabel'>pablo.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3 text-white'>
                <NavDropdown title='Links' id='offcanvasNavbarDropdown'>
                  <NavDropdown.Item
                    href='https://www.linkedin.com/in/pablobarcena99/'
                    target='_blank'
                    onClick={() => setExpanded(false)}>
                    Linkedin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href='https://github.com/pablobarcena99'
                    target='_blank'
                    onClick={() => setExpanded(false)}>
                    Github
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Projects' id='offcanvasNavbarDropdown2'>
                  <NavDropdown.Item
                    as={Link}
                    to='polaroid'
                    spy={true}
                    smooth={false}
                    duration={0}
                    offset={-48}
                    href=''
                    onClick={() => setExpanded(false)}>
                    eCommerce
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='menda_lerenda'
                    spy={true}
                    smooth={false}
                    duration={0}
                    offset={-48}
                    href=''
                    onClick={() => setExpanded(false)}>
                    Menda Lerenda
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='dear'
                    spy={true}
                    smooth={false}
                    duration={0}
                    offset={-48}
                    href=''
                    onClick={() => setExpanded(false)}>
                    dear
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>Github</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
