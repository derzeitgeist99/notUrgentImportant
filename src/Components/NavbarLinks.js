import React from "react";
import { StyledList, StyledNavbarLink } from "../Styled/StyledHamburgerMenu";

export function NavbarLinks({ handleClick }) {
    return (
        <StyledList>
            <li>
                <StyledNavbarLink to="/tasklist" onClick={(event) => handleClick(event)}>See the list </StyledNavbarLink>
            </li>
            <li>
                <StyledNavbarLink to="/updatelist" onClick={(event) => handleClick(event)}>Modify your Tasks </StyledNavbarLink>
            </li>
            <li>
                <StyledNavbarLink to="/settings" onClick={(event) => handleClick(event)}>Settings </StyledNavbarLink>
            </li>
            <li>
                Login/logout
            </li>


        </StyledList>
    )
}