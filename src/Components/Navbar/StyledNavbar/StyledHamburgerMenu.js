import styled from "styled-components"
import { Link } from 'react-router-dom';



export const NavbarLinksContainer = styled.div`
height: 110px;
width: 100%;
padding-inline: 10px;

background-color: #f7f3ed;

`
export const NavbarLinksEnterExit = styled.div`

 /* transition: 0.2s;


  transform: 
  //translateY(${({ state }) => (state === "entering" || state === "entered" ? "100%" : "0%")})
 scaleY(${({ state }) => (state === "exiting" || state === "exited" ? "0" : "100%")})
  ;
  transform-origin: top; */
  
`


export const StyledNavbarLink = styled(Link)`
text-decoration: none;
color: black;
:hover {color: black}
`


export const StyledList = styled.ul`
list-style-type: none;
line-height: 1.3rem;
text-align: end;
`

export const StyledHamburgerIcon = styled.div`
grid-row: 1;
grid-column: 3;
font-size: 2rem;
margin: 3px;`

export const StyledLoginButton = styled.button`
background-color: transparent;
border: none;
padding: 0;
cursor: pointer;
font-size: 1rem;
text-align: end;

`

