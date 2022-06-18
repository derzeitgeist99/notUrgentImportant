import styled from "styled-components"
import { Link } from 'react-router-dom';


export const StyledNavbarLink = styled(Link)`
text-decoration: none;
color: black;
:hover {color: black}
`

export const StyledList = styled.ul`
grid-row: 2;
grid-column:2;
list-style-type: none;
lineHeight: 1.3rem;
text-align: end;
`

export const StyledHamburgerIcon = styled.div`
grid-row: 1;
grid-column: 3;
fontSize: 2rem;
margin: 3px;`

export const StyledLoginButton = styled.button`
background-color: transparent;
border: none;
padding: 0;
cursor: pointer;
fontSize: 1rem;
text-align: end;

`