import React, { useEffect, useState } from "react";
import { StyledContainer, StyledTask } from "../Styled/StyledTaskList";
import { Clean } from "../Styled/theme";

export default function TaskList() {
    const dummydata = ["Clean House", "Sell Car", "Call Babi", "Shave"]
    const [taskColors, setTaskColors] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(dummydata)
        setTaskColors(Clean.colors)

    }, [])


    return (
        <StyledContainer>
            {tasks.map((task, index) => (

                <StyledTask className="" key={index} style={{ "backgroundColor": taskColors[index] }}>{task}</StyledTask>
            ))}
        </StyledContainer>
    )
}