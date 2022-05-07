import React, { useEffect, useState } from "react";
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { StyledEditControlsDiv, StyledEditTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { useTaskData } from "../Context/TaskDataContext";

export default function EditTask({ taskIndex, setIsEdit }) {
    const [inputText, setInputText] = useState()
    const [taskData, setTaskData] = useTaskData()



    const handleChange = (event) => {
        event.preventDefault()
        setInputText(event.target.value)
    }

    const handleAccept = (event) => {
        event.preventDefault()
        // send to Airtable
        const payload = { ...taskData[taskIndex], Text: inputText }
        // close the edit mode
        setIsEdit(null)
        // update Context
        const newTaskData = taskData
        newTaskData[taskIndex] = payload
        setTaskData(newTaskData)

    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit(null)

    }
    return (
        <div className="">
            <StyledTaskBox>
                <StyledEditTask defaultValue={taskData[taskIndex].Text} onChange={(event) => handleChange(event)} autoFocus />
                <StyledEditControlsDiv>

                    <MdOutlineDone onClick={(event) => handleAccept(event)} style={{ "color": "green", "cursor": "pointer" }} />
                    <MdCancel onClick={(event) => handleCancel(event)} style={{ "color": "red", "cursor": "pointer" }} />
                </StyledEditControlsDiv>
            </StyledTaskBox>
        </div>
    )
} 