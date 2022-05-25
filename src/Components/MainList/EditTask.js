import React, { useState } from "react";
import { StyledEditControlsDiv, StyledEditTask, } from "./StyledMainList/StyledTaskList";
import { useColors } from "../../Context/ColorsContext";

import { useAuth0 } from "@auth0/auth0-react";
// helpers
import { myFetch } from "../../helperFunctions/fetch"
import { definePayload } from "../../helperFunctions/definePayload";
// Icons
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { HiOutlineDocumentAdd } from "react-icons/hi"
import { IoTrashBin } from "react-icons/io5"
import { TagIcons } from "./TagIcons"

export default function EditTask({ taskKey, setIsEdit, defaultValue, defaultTag, updateIncrementallyTaskListdata, action }) {
    const [airtableFields, setAirtableFields] = useState({
        "taskDescription": defaultValue,
        "tag": defaultTag
    })
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const [colors] = useColors()

    const handleTextBoxChange = (event) => {
        event.preventDefault()
        setAirtableFields(airtableFields, airtableFields.taskDescription = event.target.value)
    }

    const handleTagChange = (event) => {
        event.preventDefault()
        setAirtableFields(airtableFields, airtableFields.tag = parseInt(event.currentTarget.dataset.tag))
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
        // if this was called from overlay I want to close it. If not, no impact
        document.getElementById("NewTaskOverlay").style.display = "none"

    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit(null)
        // if this was called from overlay I want to close it. If not, no impact
        document.getElementById("NewTaskOverlay").style.display = "none";
    }



    return (
        <>

            <StyledEditTask
                defaultValue={defaultValue}
                onChange={(event) => handleTextBoxChange(event)}
                autoFocus />
            <StyledEditControlsDiv>
                <TagIcons handleTagChange={handleTagChange} colors={colors} />

                {(action === "Update") && <MdOutlineDone onClick={(event) => handleAccept(event)} style={{ "color": "green", "cursor": "pointer" }} data-action="update" />}
                {(action === "Update") && <IoTrashBin onClick={(event) => handleAccept(event)} style={{ "color": "darkblue", "cursor": "pointer" }} data-action="delete" />}
                {(action === "Create") && <HiOutlineDocumentAdd onClick={(event) => handleAccept(event)} style={{ "color": "darkblue", "cursor": "pointer" }} data-action="create" />}
                <MdCancel onClick={(event) => handleCancel(event)} style={{ "color": "red", "cursor": "pointer" }} />
            </StyledEditControlsDiv>

        </>
    )
} 