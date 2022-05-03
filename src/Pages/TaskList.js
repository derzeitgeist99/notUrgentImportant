import React, { useEffect, useState } from "react";
import { StyledContainer } from "../Styled/StyledContainer";

export default function TaskList() {
    const dummydata = ["Clean House", "Sell Car", "Call Babi", "Shave"]

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(dummydata)
        console.log(tasks);

    }, [])


    return (
        <StyledContainer>
            {tasks.map((task) => (
                <div className="">{task}</div>
            ))}
        </StyledContainer>
    )
}