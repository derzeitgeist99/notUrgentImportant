import React, { useState } from 'react';
import { StyledLogo, StyledNavbar } from "./StyledNavbar/StyledNavbar"
import { HamburgerMenu } from './HamburgerMenu';
import { NavbarLinks } from "./NavbarLinks"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = (event) => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <StyledNavbar>

            <StyledLogo>Y.I.T.</StyledLogo>
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleClick={handleClick} />

            {menuOpen && <NavbarLinks handleClick={handleClick} />}


        </StyledNavbar>
    )
}