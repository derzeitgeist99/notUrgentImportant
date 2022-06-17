import { TaskBox } from '../Components/MainList/TaskBox';
import React, { useState } from "react";
import { StyledContainer, StyledTaskBox } from "../Components/MainList/StyledMainList/StyledTaskList";

import useTaskListData from "../hooks/useTaskListData";
import { FilterBox } from '../Components/MainList/FilterBox';
import { HandleEmptyList } from '../Components/HandleEmptyList';
import { EditModal } from '../Components/MainList/EditModal';



export default function TaskList() {


    const { taskListData,
        updateIncrementallyTaskListdata,
        setFilter, taskListFilter
    }
        = useTaskListData([])

    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState({ taskKey: undefined, editMode: undefined })


    const handleEditButton = (event, taskKey) => {
        event.preventDefault()
        setIsEdit({ taskKey: taskKey, editMode: "Update" })
    }


    return (
        <>
            <FilterBox
                paletteName={userSettings.palette}
                setFilter={setFilter}
                taskListFilter={taskListFilter}
                setIsEdit={setIsEdit}
            />
            <HandleEmptyList taskListData={taskListData} />
            <StyledContainer>
                {Object.keys(taskListData).map((taskKey) => (
                    <StyledTaskBox key={taskKey}>
                            <TaskBox
                                task={taskListData[taskKey]}
                            handleEditButton={handleEditButton}
                        />
                    </StyledTaskBox>
                ))}

                {/* This one shows when editing existiing task. It uses existing data */}
                {(isEdit.editMode === "Update") && <EditModal
                    taskKey={isEdit.taskKey}
                    defaultValue={taskListData[isEdit.taskKey].taskDescription}
                    defaultTag={taskListData[isEdit.taskKey].tag}
                    updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                    setIsEdit={setIsEdit}
                    //palette={userSettings.palette}
                    action={isEdit.editMode} />
                }

                {/* This one shows when creating new task. It uses default values */}
                {(isEdit.editMode === "Create") && <EditModal
                    // taskKey={isEdit.taskKey}
                    defaultValue="Your New Task..."
                    defaultTag={0}
                    updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                    setIsEdit={setIsEdit}
                    action={isEdit.editMode} />
                }

            </StyledContainer>
        </>
    )
}