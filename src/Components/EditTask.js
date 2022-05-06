import React, { useEffect, useState } from "react";
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { StyledEditControlsDiv, StyledEditTask, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";

export default function EditTask({ taskId, defaultText, setIsEdit }) {
    const [inputText, setInputText] = useState()



    const handleChange = (event) => {
        event.preventDefault()
        setInputText(event.target.value)
    }

    const handleAccept = (event) => {
        event.preventDefault()
        const payload = { id: taskId, Text: inputText }
        console.log(payload);
        setIsEdit(null)
    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit(null)

    }
    return (
        <div className="">
            <StyledTaskBox>
                <StyledEditTask defaultValue={defaultText} onChange={(event) => handleChange(event)} />
                <StyledEditControlsDiv>

                    <MdOutlineDone onClick={(event) => handleAccept(event)} />
                    <MdCancel onClick={(event) => handleCancel(event)} />
                </StyledEditControlsDiv>
            </StyledTaskBox>
        </div>
    )
} 