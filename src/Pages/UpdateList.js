import { TaskBox } from './../Components/TaskBox';
import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer } from "../Styled/StyledTaskList";

import { useAuth0 } from "@auth0/auth0-react";
import useTaskListData from "../hooks/useTaskListData";



export default function UpdateTaskList() {

    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const [taskListData, downloadTaskListData] = useTaskListData([])

    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)


    //This is silly, but I cannot get the color to change after TagIcon change
    // The context is changing, but this component is not registering the change
    // works with editTask component
    const [renderCounter, setRenderCounter] = useState(0)


    const handleEditButton = (event, taskId) => {
        event.preventDefault()
        setIsEdit(taskId)
    }

    const handleDelete = (event, index) => {
        event.preventDefault()
        const newTaskData = taskListData
        newTaskData.splice(index, 1)
        //setTasks(newTaskData)
        setRenderCounter(renderCounter + 1)
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
                            setIsEdit={setIsEdit} />}
                </div>
            ))}

        </StyledContainer>
    )
}