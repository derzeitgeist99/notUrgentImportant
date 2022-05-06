import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { AiOutlineEdit } from "react-icons/ai"



export default function UpdateTaksList() {
    const dummydata = [
        { id: 656565, "Text": "Clean House", Tag: 1 },
        { id: 2, "Text": "Sell Car", Tag: 2 },
        { id: 3, "Text": "Call Babi", Tag: 3 },
        { id: 4, "Text": "Shave", Tag: 4 }]
    const [isEdit, setIsEdit] = useState(null)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(dummydata)
    }, [])

    const handleEditButton = (event, taskId) => {
        event.preventDefault()
        setIsEdit(taskId)

    }



    return (

        <StyledContainer>
            {tasks.map((task) => (
                <div className="" key={task.id}>
                    {(isEdit != task.id) ?
                        <StyledTaskBox className="">

                            <StyledTask className="" key={task.id} style={{ "backgroundColor": "beige" }}>{task.Text}</StyledTask>
                            <StyledEditControlsDiv>
                                <AiOutlineEdit onClick={(event) => handleEditButton(event, task.id)} />
                            </StyledEditControlsDiv>
                        </StyledTaskBox>
                        :
                        <EditTask
                            defaultText={task.Text}
                            taskId={task.id}
                            setIsEdit={setIsEdit} />}
                </div>

            ))}
        </StyledContainer>
    )
}