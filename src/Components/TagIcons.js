import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"
import { useTaskData } from "../Context/TaskDataContext";
import { palette } from "../Styled/theme"
import { availableTagsList } from "../helperFunctions/availableTags.js"


export function TagIcons({ handleTagChange, activePalette }) {
    // This has to be centrally controlled
    const [availableTags] = useState(availableTagsList)
    // This has to come from context
    const userSettings = { palette: "clean" }
    const [colors, setColors] = useState(palette[activePalette])

    return (
        availableTags.map((tag) => (
            <FaCircle style={{ "color": colors[tag], cursor: "pointer" }}
                onClick={(event) => handleTagChange(event)}
                key={tag}
                data-tag={tag} //https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
            />)
        )
    )
}