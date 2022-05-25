import { SetNumberOfTasksButton } from './../Components/Settings/SetNumberOfTasksButton';
import { SetThemeButton } from "./../Components/Settings/SetThemeButton"
import React from "react";
import { StyledSettingsLine } from '../Components/Settings/StyledSettings/StyledSettings';


export default function Settings() {


    return (
        <>
            <h1>Settings</h1>
            <StyledSettingsLine>

                <p>Select number of tasks to be displayed</p>
                <SetNumberOfTasksButton />
                <p>Select theme</p>
                <SetThemeButton />

            </StyledSettingsLine>
            <p style={{ background: "lightgray", "marginTop": "30px", "fontSize": "0.8rem" }}>Settings are persisted in local storage. Settings are not shared across devices.</p>
        </>
    )
}