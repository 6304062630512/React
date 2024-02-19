import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './navbar.css'

function Bootnav(){
    return( 
        <>
        <Navbar id='Nav' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">React</Navbar.Brand>
                <Nav className='me-auto'>
                <NavDropdown title="Roots of Equations">
                    <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
                    <NavDropdown.Item href="/false-position">False Position</NavDropdown.Item>
                    <NavDropdown.Item href="/onepoint">One-Point Iteration </NavDropdown.Item>
                    <NavDropdown.Item href="/newtonraphson">Newton Raphson</NavDropdown.Item>
                    <NavDropdown.Item href="/TaylorSeries">Taylor Series</NavDropdown.Item>
                    <NavDropdown.Item href="/SuchadaMethod">SuchadaMethod</NavDropdown.Item>
                    <NavDropdown.Item href="/test1">Test</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    </>
    );
}

export default Bootnav;