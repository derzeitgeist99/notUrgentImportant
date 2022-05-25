import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledLoginButton } from "./StyledNavbar/StyledHamburgerMenu"
import useTaskListData from "../../hooks/useTaskListData";

export function LoginButton({ handleClick }) {

    const { loginWithPopup, user, isAuthenticated, logout, } = useAuth0();

    // After Click I need to close the div
    const loginAndCloseDiv = (event) => {
        loginWithPopup()
        console.log("Log in with Redirect");
        handleClick(event)


    }

    const loginOutAndCloseDiv = (event) => {
        logout({ returnTo: window.location.origin })
        handleClick(event)
    }

    return (
        <li>
            {!isAuthenticated &&
                <StyledLoginButton onClick={(event) => loginAndCloseDiv(event)}>Login</StyledLoginButton>
            }

            {isAuthenticated &&
                <StyledLoginButton onClick={(event) => loginOutAndCloseDiv(event)}>Logout {user.name}</StyledLoginButton>
            }
        </li>
    )
}
