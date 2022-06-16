import { TaskBox } from '../Components/MainList/TaskBox';
import React, { useState } from "react";
import EditTask from "../Components/MainList/EditTask";
import { StyledContainer, StyledTaskBox } from "../Components/MainList/StyledMainList/StyledTaskList";

import useTaskListData from "../hooks/useTaskListData";
import { FilterBox } from '../Components/MainList/FilterBox';
import { HandleEmptyList } from '../Components/HandleEmptyList';
import { NewTask } from '../Components/MainList/NewTask';
import { useColors } from '../Context/ColorsContext';



export default function TaskList() {

    const [colors] = useColors()


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
                taskListFilter={taskListFilter}
            />
            <HandleEmptyList taskListData={taskListData} />
            <StyledContainer>
                {Object.keys(taskListData).map((taskKey) => (
                    <StyledTaskBox key={taskKey}

                    >

                        {(isEdit !== taskKey) ?
                            <TaskBox
                                task={taskListData[taskKey]}
                                handleEditButton={handleEditButton}
                                backgroundColor={colors[taskListData[taskKey]["tag"]]}

                            />
                            :
                            <EditTask
                                taskKey={taskKey}
                                defaultValue={taskListData[taskKey].taskDescription}
                                defaultTag={taskListData[taskKey].tag}
                                updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                                setIsEdit={setIsEdit}
                                action="Update"
                                initialTagColor={taskListData[taskKey]["tag"]}
                            />}

                    </StyledTaskBox>
                ))}

                <NewTask
                    updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                    setIsEdit={setIsEdit}
                    palette={userSettings.palette}
                    action="Create" />

            </StyledContainer>
        </>
    )
}