import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"
import { useTaskData } from "../Context/TaskDataContext";
import { palette } from "../Styled/theme"


export function TagIcons({ taskIndex, renderCounter, setRenderCounter }) {
    const [taskData, setTaskData] = useTaskData()
    // This has to be centrally controlled
    const [availableTags] = useState([0, 1, 2, 3])
    const [colors, setColors] = useState([])
    // This has to come from context
    const userSettings = { palette: "clean" }

    useEffect(() => {
        setColors(palette[userSettings.palette])
    }, [])


    const handleClick = (event) => {
        event.preventDefault()
        // send to Airtable
        const payload = { ...taskData[taskIndex], tag: event.currentTarget.dataset.div_id }
        //update Context
        const newTaskData = taskData
        newTaskData[taskIndex] = payload
        setTaskData(newTaskData)
        // Workaround for renderint the UpdateList js. see more notes there
        setRenderCounter(renderCounter + 1)
    }


    return (
        availableTags.map((tag) => (
            <FaCircle style={{ "color": colors[tag], cursor: "pointer" }}
                onClick={(event) => handleClick(event)}
                key={tag}
                data-div_id={tag} //https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
            />)
        )
    )
}