import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { StyledEditControlsDiv, StyledTask } from "./StyledMainList/StyledTaskList";


export function TaskBox({ task, handleEditButton, backgroundColor }) {



    return (<>
        <StyledTask
            backgroundColor={backgroundColor}>
            {task.taskDescription}
        </StyledTask>

            <StyledEditControlsDiv>
                <AiOutlineEdit onClick={event => handleEditButton(event, task.taskKey)} style={{
                    "color": "blue",
                    "cursor": "pointer"
                }} />

        </StyledEditControlsDiv>
    </>);
}
