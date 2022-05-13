import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";

export function TaskBox({ task, handleEditButton }) {

    const userSettings = { palette: "clean" }


    return <StyledTaskBox>
        <StyledTask taskColor={task.tag} palette={userSettings.palette}>{task.taskDescription}</StyledTask>
        <StyledEditControlsDiv>
            <AiOutlineEdit onClick={event => handleEditButton(event, task.taskKey)} style={{
                "color": "blue",
                "cursor": "pointer"
            }} />
        </StyledEditControlsDiv>
    </StyledTaskBox>;
}
