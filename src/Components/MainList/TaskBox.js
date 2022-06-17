import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useColors } from "../../Context/ColorsContext";
import { StyledEditModeDiv, StyledTask } from "./StyledMainList/StyledTaskList";


export function TaskBox({ task, handleEditButton }) {

    const [colors] = useColors()
    return (<>
        <StyledTask
            backgroundColor={colors[task.tag]}>
            {task.taskDescription}
        </StyledTask>

        <StyledEditModeDiv>
                <AiOutlineEdit onClick={event => handleEditButton(event, task.taskKey)} style={{
                    "color": "blue",
                    "cursor": "pointer"
                }} />


        </StyledEditModeDiv>
    </>);
}
