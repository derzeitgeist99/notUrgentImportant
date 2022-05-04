import styled from "styled-components"
import { Link } from 'react-router-dom';


export const StyledNavbarLink = styled(Link)`
text-decoration: none;
`

export const StyledList = styled.ul`
grid-row: 2;
grid-column:2;
list-style-type: none;
line-height: 1.3rem;

`

export const StyledHamburgerIcon = styled.div`
grid-row: 1;
grid-column: 3;
font-size: 2rem;
margin: 3px`