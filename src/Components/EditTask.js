import React, { useEffect, useState } from "react";
import { StyledEditControlsDiv, StyledEditTask, StyledTaskBox } from "../Styled/StyledTaskList";
import useTaskListData from "../hooks/useTaskListData";
import { useAuth0 } from "@auth0/auth0-react";
import { myFetch } from "../helperFunctions/fetch";
// Icons
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { FaRocket } from "react-icons/fa"
import { IoTrashBin } from "react-icons/io5"
import { definePayload } from "../helperFunctions/definePayload";
import { TagIcons } from "./TagIcons"

export default function EditTask({ taskKey, setIsEdit, defaultValue, defaultTag, updateIncrementallyTaskListdata }) {
    const [airtableFields, setAirtableFields] = useState({
        "taskDescription": defaultValue,
        "tag": defaultTag
    })
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

    const handleTextBoxChange = (event) => {
        event.preventDefault()
        const newAirtableFields = airtableFields
        newAirtableFields.taskDescription = event.target.value
        setAirtableFields(newAirtableFields)
    }

    const handleTagChange = (event) => {
        event.preventDefault()
        const newAirtableFields = airtableFields
        newAirtableFields.tag = parseInt(event.currentTarget.dataset.tag)
        setAirtableFields(newAirtableFields)
        console.log(airtableFields);
    }

    const handleAccept = async (event) => {
        event.preventDefault()

        const action = event.currentTarget.dataset.action
        const token = await getAccessTokenSilently()
        const payload = definePayload(action, taskKey, airtableFields)

        // wait until data is updated
        const data = await myFetch("POST", token, "updateTask", payload)

        // then use the returned value to incrementally update state
        updateIncrementallyTaskListdata(data, action)
        // if airtable fails, then the edit mode does not close
        setIsEdit(null)
        // deserves better error handling

    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit(null)
    }



    return (
        <div className="">
            <StyledTaskBox>
                <StyledEditTask
                    defaultValue={defaultValue}
                    onChange={(event) => handleTextBoxChange(event)} autoFocus />
                <StyledEditControlsDiv>
                    <TagIcons taskIndex={taskKey} handleTagChange={handleTagChange} />

                    <MdOutlineDone onClick={(event) => handleAccept(event)} style={{ "color": "green", "cursor": "pointer" }} data-action="update" />
                    <MdCancel onClick={(event) => handleCancel(event)} style={{ "color": "red", "cursor": "pointer" }} />
                    <FaRocket onClick={(event) => handleAccept(event)} style={{ "color": "darkblue", "cursor": "pointer" }} data-action="create" />
                    <IoTrashBin onClick={(event) => handleAccept(event)} style={{ "color": "darkblue", "cursor": "pointer" }} data-action="delete" />
                </StyledEditControlsDiv>
            </StyledTaskBox>
        </div>
    )
} 