import React, { useState } from "react";
import { StyledEditControlsDiv } from "./StyledMainList/StyledTaskList";
import { useColors } from "../../Context/ColorsContext";

import { useAuth0 } from "@auth0/auth0-react";
// helpers
import { myFetch } from "../../helperFunctions/fetch"
import { definePayload } from "../../helperFunctions/definePayload";

import { TagIcons } from "./TagIcons"
import { StyledEditTaskInput, StyledIconGroup } from "./EditMode/StyledTagIconGroup";
import EditModeActionPills from "./EditMode/EditModeActionPills";

export default function EditTask({ taskKey, setIsEdit, defaultValue, defaultTag, updateIncrementallyTaskListdata, action }) {

    const [airtableFields, setAirtableFields] = useState({
        "taskDescription": defaultValue,
        "tag": defaultTag
    })
    const { getAccessTokenSilently } = useAuth0();
    const [colors] = useColors()

    const [currentTagColor, setCurrentTagColor] = useState(defaultTag)

    const handleTextBoxChange = (event) => {
        event.preventDefault()
        setAirtableFields(airtableFields, airtableFields.taskDescription = event.target.value)
    }

    const handleTagChange = (event) => {
        event.preventDefault()
        const newTag = parseInt(event.currentTarget.dataset.tag)
        setCurrentTagColor(newTag)
        setAirtableFields(airtableFields, airtableFields.tag = newTag)
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
        setIsEdit({ taskKey: undefined, editMode: undefined })
        // deserves better error handling
    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit({ taskKey: undefined, editMode: undefined })

    }

    return (
        <>

            <StyledEditTaskInput
                defaultValue={defaultValue}
                onChange={(event) => handleTextBoxChange(event)}
                autoFocus
                backgroundColor={colors[currentTagColor]}
            />
            <StyledEditControlsDiv>
                <StyledIconGroup>
                <TagIcons handleTagChange={handleTagChange} colors={colors} />
                    <hr />
                    <hr />
                    <EditModeActionPills
                        action={action}
                        handleAccept={handleAccept}
                        handleCancel={handleCancel}
                    />
                </StyledIconGroup>
            </StyledEditControlsDiv>

        </>
    )
} 