import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function HandleEmptyList({ taskListData }) {
    const { isAuthenticated } = useAuth0()

    return (

        <>
            {!isAuthenticated &&
                <p>You are not logged it. Log in or create account in the menu</p>}
            {(Object.keys(taskListData).length === 0 && isAuthenticated) &&
                <p>This list seems empty. Create new task of try another filter </p>}
        </>
    )
}
