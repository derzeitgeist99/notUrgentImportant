import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { StyledEditControlsDiv, StyledTask } from "../Styled/StyledTaskList";

export function TaskBox({ task, handleEditButton }) {

    return <>
        <StyledTask>{task.taskDescription}</StyledTask>
        <StyledEditControlsDiv>
            <AiOutlineEdit onClick={event => handleEditButton(event, task.taskKey)} style={{
                "color": "blue",
                "cursor": "pointer"
            }} />
        </StyledEditControlsDiv>
    </>;
}
