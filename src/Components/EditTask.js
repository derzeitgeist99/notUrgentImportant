import React, { useEffect, useState } from "react";
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { FaRocket } from "react-icons/fa"
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
        const payload = { ...taskData[taskIndex], taskDescription: inputText }
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

    const createNewTask = (event) => {
        event.preventDefault()
        const payload = { taskDescription: inputText, tag: 1 }
        console.log(payload);
        setIsEdit(null)



    }
    return (
        <div className="">
            <StyledTaskBox>
                <StyledEditTask defaultValue={taskData[taskIndex].taskDescription} onChange={(event) => handleChange(event)} autoFocus />
                <StyledEditControlsDiv>

                    <MdOutlineDone onClick={(event) => handleAccept(event)} style={{ "color": "green", "cursor": "pointer" }} />
                    <MdCancel onClick={(event) => handleCancel(event)} style={{ "color": "red", "cursor": "pointer" }} />
                    <FaRocket onClick={(event) => createNewTask(event)} style={{ "color": "darkblue", "cursor": "pointer" }} />
                </StyledEditControlsDiv>
            </StyledTaskBox>
        </div>
    )
} 