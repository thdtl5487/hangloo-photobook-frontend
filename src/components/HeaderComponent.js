import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdAddShoppingCart} from 'react-icons/md';
import { CartFill } from 'react-bootstrap-icons';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export const HeaderComponent = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
        <div id="header">
            

            <Navbar bg="light" >
            <div className="nav">
            <div className="toggle"><Navbar.Toggle /></div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home"> <img className="logo" name="logoimage" alt="logo" src="img/logosample.PNG" /></Nav.Link>
                <div className="nav_brand" > <Navbar.Brand href="#home">한그루 포토북</Navbar.Brand> </div>
                <div className="shopping"><Nav.Link href="#link"><CartFill/></Nav.Link></div>
            
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
            </div>
            </Navbar>
            {/* <div className='test'> {isMobile ? "mobile" : "not mobile"}</div> */}
            
        </div>
    );
};

export default HeaderComponent;