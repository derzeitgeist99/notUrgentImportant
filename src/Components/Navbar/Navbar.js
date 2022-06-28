import React, { useState } from 'react';
import { StyledLogo, StyledNavbar } from "./StyledNavbar/StyledNavbar"
import { HamburgerMenu } from './HamburgerMenu';
import { NavbarLinks } from "./NavbarLinks"
import { CSSTransition, Transition } from 'react-transition-group';
import { NavbarLinksContainer, NavbarLinksEnterExit } from './StyledNavbar/StyledHamburgerMenu';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = (event) => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <>
        <StyledNavbar>
            <StyledLogo>Y.I.T.</StyledLogo>
                <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleClick={handleClick} />

            </StyledNavbar>

            {menuOpen &&
                        <NavbarLinksContainer>
                            <NavbarLinks handleClick={handleClick} />
                </NavbarLinksContainer>
                }

        </>
    )
}