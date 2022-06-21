import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function HandleEmptyList({ taskListData }) {
    const { isAuthenticated } = useAuth0()

    if (!isAuthenticated) {
        return (
            <>
                <h5>You are you logged in? </h5>
                <p> <span style={{ color: "darkblue" }}>No </span> ... then log in or create account in the menu.</p>
                <p> <span style={{ color: "darkblue" }}>Yes </span> ... then refresh page. You have most likely Safari or Firefox with third-party cookies blocked</p>
        </>
        )
    }

    return (
        <p>This list seems empty. Create new task of try another filter </p>
    )
}
