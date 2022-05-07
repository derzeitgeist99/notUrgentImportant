import React, { useEffect, useState } from "react";
import { useTaskData } from "../Context/TaskDataContext";
import { StyledContainer, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";


export default function TaskList() {
    const dummydata = [
        { id: 656565, "Text": "Clean House", Tag: 0 },
        { id: 2, "Text": "Sell Car", Tag: 1 },
        { id: 3, "Text": "Call Babi", Tag: 3 },
        { id: 4, "Text": "Shave", Tag: 3 }]
    const userSettings = { palette: "clean" }

    const [tasks, setTasks] = useTaskData(dummydata)

    useEffect(() => {
        setTasks(dummydata)
    }, [])


    return (
        <StyledContainer>
            {tasks.map((task) => (
                <StyledTaskBox key={task.id}>

                    <StyledTask
                        taskColor={task.Tag}
                        palette={userSettings.palette} >{task.Text}</StyledTask>
                </StyledTaskBox>
            ))}
        </StyledContainer>
    )
}