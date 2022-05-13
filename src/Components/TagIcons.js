import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"
import { useTaskData } from "../Context/TaskDataContext";
import { palette } from "../Styled/theme"


export function TagIcons({ handleTagChange }) {
    // This has to be centrally controlled
    const [availableTags] = useState([0, 1, 2, 3])
    // This has to come from context
    const userSettings = { palette: "clean" }
    const [colors, setColors] = useState(palette[userSettings.palette])

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