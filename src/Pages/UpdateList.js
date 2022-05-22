import { TaskBox } from './../Components/TaskBox';
import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledTaskBox } from "../Styled/StyledTaskList";

import useTaskListData from "../hooks/useTaskListData";
import { FilterBox } from '../Components/FilterBox';
import { HandleEmptyList } from '../Components/HandleEmptyList';



export default function UpdateTaskList() {


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





    return (
        <>
            <FilterBox
                paletteName={userSettings.palette}
                setFilter={setFilter}
                taskListFilter={taskListFilter} />
            <HandleEmptyList taskListData={taskListData} />
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