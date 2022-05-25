import React from "react";
import { StyledList, StyledLoginButton, StyledNavbarLink } from "./StyledNavbar/StyledHamburgerMenu";
import { LoginButton } from "./LoginButton";


export function NavbarLinks({ handleClick }) {



    return (
        <StyledList>

            <li>
                <StyledNavbarLink to="/" onClick={(event) => handleClick(event)}>See the list </StyledNavbarLink>
            </li>

            <li>
                <StyledNavbarLink to="/settings" onClick={(event) => handleClick(event)}>Settings </StyledNavbarLink>
            </li>
            <li>
                <StyledNavbarLink to="/about" onClick={(event) => handleClick(event)}>About </StyledNavbarLink>
            </li>
            <li>
                <StyledNavbarLink to="/faq" onClick={(event) => handleClick(event)}>FAQ </StyledNavbarLink>
            </li>

            <LoginButton handleClick={handleClick} />




        </StyledList>
    )
}