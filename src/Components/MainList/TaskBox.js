import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useColors } from "../../Context/ColorsContext";
import { StyledEditControlsDiv, StyledTask } from "./StyledMainList/StyledTaskList";


export function TaskBox({ task, handleEditButton }) {

    const [colors] = useColors()
    return (<>
        <StyledTask
            backgroundColor={colors[task.tag]}>
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
