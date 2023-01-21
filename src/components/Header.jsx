import React from 'react';
import { Navbar, Container, FormControl, Dropdown, Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' style={{height:'80px'}}>
        <Container >
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}} placeholder='Search Product' className='m-auto'/>
            </Navbar.Text>
            <Nav>
                <Dropdown>
                <Dropdown.Toggle >
                 <FaShoppingCart fontSize={'25px'} color='white'/>
                 <Badge color='white'>{100}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu  style={{minWidth:370}}>
                    <span style={{padding:10}}>Cart is Empty</span>
                </Dropdown.Menu>
                </Dropdown>
                
            </Nav>
        </Container>
    </Navbar>
  )
}
