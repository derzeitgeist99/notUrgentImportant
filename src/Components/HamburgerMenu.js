import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import { StyledHamburgerIcon } from "../Styled/StyledHamburgerMenu";

export function HamburgerMenu({ setMenuOpen, menuOpen, handleClick }) {



    return (
        <StyledHamburgerIcon>

            {!menuOpen && <GiHamburgerMenu onClick={(event) => handleClick(event)} />}
            {menuOpen && <IoCloseSharp onClick={(event) => handleClick(event)} />}
        </StyledHamburgerIcon>
    )

}