
import './App.css';
import {Navbar,Container,Nav} from "react-bootstrap";
import styled from "styled-components";
import {Profile,Portfolio,Contactme,Bottom,Board} from "./Components";
import {ThemeProvider} from "styled-components";
import theme from './theme.js';
import {FaReact} from 'react-icons/fa';
import {Link} from "react-scroll";
import {useState} from "react";

let MainContainer =styled.div`
    display: block;
    justify-content: center;
    align-items: center;
`;
let FixedNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;





function App() {
  return (
      <ThemeProvider theme={theme}>
    <>
        <FixedNav>
        <Navbar bg="dark" expand="lg" >
            <Container style={{backgroundColor:"#20232A", flex:""}}>
                <Navbar.Brand style={{color:"white",marginLeft:"10px"}}><Link to={"1"}><FaReact size={20} style={{marginBottom:"5px"}} color={theme.NativeColor}/> DeveloperJSKIM</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",fontSize:12}}>MENU</Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"20px"}}>
                    <Nav className="me-auto" >
                        <Nav style={{color:"white", cursor:"pointer",marginRight:"20px"}}><Link to={"1"}>HOME</Link></Nav>
                        <Nav style={{color:"white", cursor:"pointer",marginRight:"20px"}}><Link to={"2"}>PORTFOLIO</Link></Nav>
                        <Nav style={{color:"white", cursor:"pointer",marginRight:"20px"}}><Link to={"3"}> CONTACT ME</Link></Nav>
                        <Nav style={{color:"white", cursor:"pointer",marginRight:"20px"}}><Link to={"4"}> BOARD </Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </FixedNav>

    <MainContainer>
        <div id={"1"}>
        <Profile/>
        </div>

        <div id={"2"}>
        <Portfolio/>
        </div>


        <div id={"3"}>
        <Contactme/>
        </div>

        <div id={"4"}>
        <Board/>
        </div>

        <Bottom/>



    </MainContainer>
    </>
      </ThemeProvider>
  );
}


export default App;
