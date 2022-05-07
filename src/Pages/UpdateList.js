import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { AiOutlineEdit } from "react-icons/ai"
import { useTaskData } from "../Context/TaskDataContext";
import { TagIcons } from "../Components/TagIcons";



export default function UpdateTaksList() {
    const dummydata = [
        { id: 656565, "Text": "Clean House", Tag: 0 },
        { id: 2, "Text": "Sell Car", Tag: 1 },
        { id: 3, "Text": "Call Babi", Tag: 3 },
        { id: 4, "Text": "Shave", Tag: 3 }]
    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)
    const [tasks, setTasks] = useTaskData()
    //This is silly, but I cannot get the color to change after TagIcon change
    // The context is changing, but this component is not registering the change
    // works with editTask component
    const [renderCounter, setRenderCounter] = useState(0)

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
                                <TagIcons taskIndex={index} tagIndex={0} renderCounter={renderCounter} setRenderCounter={setRenderCounter} />
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