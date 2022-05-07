import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { AiOutlineEdit } from "react-icons/ai"
import { useTaskData } from "../Context/TaskDataContext";



export default function UpdateTaksList() {
    const dummydata = [
        { id: 656565, "Text": "Clean House", Tag: 0 },
        { id: 2, "Text": "Sell Car", Tag: 1 },
        { id: 3, "Text": "Call Babi", Tag: 3 },
        { id: 4, "Text": "Shave", Tag: 3 }]
    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)
    const [tasks, setTasks] = useTaskData(dummydata)

    useEffect(() => {
        setTasks(dummydata)
    }, [])

    const handleEditButton = (event, taskId) => {
        event.preventDefault()
        setIsEdit(taskId)

    }



    return (

        <StyledContainer>
            {tasks.map((task, index) => (
                <div className="" key={task.id}>
                    {(isEdit != task.id) ?
                        <StyledTaskBox>

                            <StyledTask

                                taskColor={task.Tag}
                                palette={userSettings.palette} >{task.Text}</StyledTask>
                            <StyledEditControlsDiv>
                                <AiOutlineEdit onClick={(event) => handleEditButton(event, task.id)} style={{ "color": "blue", "cursor": "pointer" }} />
                            </StyledEditControlsDiv>
                        </StyledTaskBox>
                        :
                        <EditTask
                            taskIndex={index}
                            setIsEdit={setIsEdit} />}
                </div>

            ))}
        </StyledContainer>
    )
}