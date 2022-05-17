import React from "react";
import { StyledList, StyledLoginButton, StyledNavbarLink } from "../Styled/StyledHamburgerMenu";
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

            <LoginButton handleClick={handleClick} />




        </StyledList>
    )
}