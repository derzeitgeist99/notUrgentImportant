import React, { useEffect, useState } from "react";
import EditTask from "../Components/EditTask";
import { StyledContainer, StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { AiOutlineEdit } from "react-icons/ai"
import { IoTrashBinSharp } from "react-icons/io5"
import { useTaskData } from "../Context/TaskDataContext";
import { TagIcons } from "../Components/TagIcons";
import { useAuth0 } from "@auth0/auth0-react";



export default function UpdateTaksList() {

    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

    const getTasks = async () => {
        const token = await getAccessTokenSilently()

        const options = {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        }
        console.log(options);
        const result = await fetch("http://localhost:8888/.netlify/functions/getTasks", options)
        const data = await result.json()
        return data

    }


    const userSettings = { palette: "clean" }
    const [isEdit, setIsEdit] = useState(null)
    const [tasks, setTasks] = useTaskData()
    //This is silly, but I cannot get the color to change after TagIcon change
    // The context is changing, but this component is not registering the change
    // works with editTask component
    const [renderCounter, setRenderCounter] = useState(0)

    useEffect(() => {
        const init = async () => {


            // Need to wrap my head around this, but idea is to use sub provided by Auth0 as userId. 
            // should I use context provided by Auth0 or add it into my own?

            // console.log(userId);
            const result = await getTasks()
            setTasks(result)
        }
        init()
    }, [])


    const handleEditButton = (event, taskId) => {
        event.preventDefault()
        setIsEdit(taskId)
    }

    const handleDelete = (event, index) => {
        event.preventDefault()
        const newTaskData = tasks
        newTaskData.splice(index, 1)
        setTasks(newTaskData)


        setRenderCounter(renderCounter + 1)
    }

    if (tasks.length === 0) {
        return (<p>no tasks. log in or create new</p>)

    } 

    return (

        <StyledContainer>
            {tasks.map((task, index) => (
                <div className="" key={task.taskId}>
                    {(isEdit !== task.taskId) ?
                        <StyledTaskBox>
                            <StyledTask
                                taskColor={task.tag}
                                palette={userSettings.palette} >{task.taskDescription}</StyledTask>
                            <StyledEditControlsDiv>
                                <TagIcons taskIndex={index} renderCounter={renderCounter} setRenderCounter={setRenderCounter} />
                                <AiOutlineEdit onClick={(event) => handleEditButton(event, task.taskId)} style={{ "color": "blue", "cursor": "pointer" }} />
                                <IoTrashBinSharp onClick={(event) => handleDelete(event, index)} style={{ "color": "black", "cursor": "pointer" }} />
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