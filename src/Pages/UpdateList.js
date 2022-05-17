import { TaskBox } from './../Components/TaskBox';
import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledTaskBox } from "../Styled/StyledTaskList";

import { useAuth0 } from "@auth0/auth0-react";
import useTaskListData from "../hooks/useTaskListData";
import { FilterBox } from '../Components/FilterBox';



export default function UpdateTaskList() {

    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const { taskListData,
        updateIncrementallyTaskListdata,
        setFilter, taskListFilter
    }
        = useTaskListData([])

    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)


    const handleEditButton = (event, taskKey) => {
        event.preventDefault()
        setIsEdit(taskKey)

    }


    if (taskListData.length === 0) {
        return (<p>no tasks. log in or create new</p>)

    } 

    return (
        <>
            <FilterBox
                paletteName={userSettings.palette}
                setFilter={setFilter}
                taskListFilter={taskListFilter} />
        <StyledContainer>
            {Object.keys(taskListData).map((taskKey) => (

                <StyledTaskBox key={taskKey}
                    taskColor={taskListData[taskKey]["tag"]}
                    palette={userSettings.palette} >

                    {(isEdit !== taskKey) ?
                        <TaskBox
                            task={taskListData[taskKey]}
                            handleEditButton={handleEditButton}
                            showEditDiv={taskListFilter.edit}
                        />
                        :
                        <EditTask
                            taskKey={taskKey}
                            defaultValue={taskListData[taskKey].taskDescription}
                            defaultTag={taskListData[taskKey].tag}
                            updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                            setIsEdit={setIsEdit} />}

                </StyledTaskBox>
            ))}

        </StyledContainer>
        </>
    )
}