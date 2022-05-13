import { TaskBox } from './../Components/TaskBox';
import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer } from "../Styled/StyledTaskList";

import { useAuth0 } from "@auth0/auth0-react";
import useTaskListData from "../hooks/useTaskListData";



export default function UpdateTaskList() {

    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const [taskListData, downloadTaskListData, setTaskListData, updateIncrementallyTaskListdata] = useTaskListData([])

    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)


    const handleEditButton = (event, taskKey) => {
        event.preventDefault()
        console.log(taskListData);
        setIsEdit(taskKey)
    }


    if (taskListData.length === 0) {
        return (<p>no tasks. log in or create new</p>)

    } 

    return (

        <StyledContainer>
            {Object.keys(taskListData).map((taskKey) => (
                <div className="" key={taskKey}>
                    {(isEdit !== taskKey) ?
                        <TaskBox
                            task={taskListData[taskKey]}
                            handleEditButton={handleEditButton}
                        />
                        :
                        <EditTask
                            taskKey={taskKey}
                            defaultValue={taskListData[taskKey].taskDescription}
                            defaultTag={taskListData[taskKey].tag}
                            updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                            setIsEdit={setIsEdit} />}
                </div>
            ))}

        </StyledContainer>
    )
}