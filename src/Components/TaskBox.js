import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { StyledEditControlsDiv, StyledTask } from "../Styled/StyledTaskList";

export function TaskBox({ task, handleEditButton, showEditDiv }) {

    return (<>
        <StyledTask>{task.taskDescription}</StyledTask>
        {showEditDiv &&
        <StyledEditControlsDiv>
            <AiOutlineEdit onClick={event => handleEditButton(event, task.taskKey)} style={{
                "color": "blue",
                "cursor": "pointer"
            }} />

            </StyledEditControlsDiv>}
    </>);
}
