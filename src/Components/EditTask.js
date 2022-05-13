import React, { useEffect, useState } from "react";
import { StyledEditControlsDiv, StyledEditTask, StyledTaskBox } from "../Styled/StyledTaskList";
import useTaskListData from "../hooks/useTaskListData";
import { useAuth0 } from "@auth0/auth0-react";
import { myFetch } from "../helperFunctions/fetch";
// Icons
import { MdOutlineDone, MdCancel } from "react-icons/md"
import { FaRocket } from "react-icons/fa"

export default function EditTask({ taskKey, setIsEdit, defaultValue, setTaskListData, updateIncrementallyTaskListdata }) {
    const [inputText, setInputText] = useState(defaultValue)
    // const [taskListData, downloadTaskListData] = useTaskListData()
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();



    const handleChange = (event) => {
        event.preventDefault()
        setInputText(event.target.value)
    }

    const handleAccept = async (event) => {
        event.preventDefault()
        // send to Airtable
        const action = event.currentTarget.dataset.action
        console.log(event.currentTarget.dataset.action);
        const token = await getAccessTokenSilently()
        let data = {}

        if (action === "update") { 
            const payload = {
                "id": taskKey,
                "fields": {
                    "taskDescription": inputText,
                },
                "action": action
            }
            data = await myFetch("POST", token, "updateTask", payload)
            console.log(data);
        } else if (action === "create") {
            const payload = {
                "fields": {
                    "taskDescription": inputText,
                    "tag": 1
                },
                "action": action
            }
            data = await myFetch("POST", token, "updateTask", payload)
        }


        // wait until data is updated
        // then use the returned value
        // to incrementally update state
        updateIncrementallyTaskListdata(data)
        // if airtable fails, then the edit mode does not close
        // deserves better error handling

        // close the edit mode
        setIsEdit(null)

    }

    const handleCancel = (event) => {
        event.preventDefault()
        setIsEdit(null)
    }

    const createNewTask = (event) => {
        event.preventDefault()
        // const payload = { taskDescription: inputText, tag: 1 }
        // console.log(payload);
        // setIsEdit(null)


    }
    return (
        <div className="">
            <StyledTaskBox>
                <StyledEditTask
                    defaultValue={defaultValue}
                    onChange={(event) => handleChange(event)} autoFocus />
                <StyledEditControlsDiv>

                    <MdOutlineDone onClick={(event) => handleAccept(event)} style={{ "color": "green", "cursor": "pointer" }} data-action="update" />
                    <MdCancel onClick={(event) => handleCancel(event)} style={{ "color": "red", "cursor": "pointer" }} />
                    <FaRocket onClick={(event) => handleAccept(event)} style={{ "color": "darkblue", "cursor": "pointer" }} data-action="create" />
                </StyledEditControlsDiv>
            </StyledTaskBox>
        </div>
    )
} 