import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"
import { availableTagsList } from "../../helperFunctions/availableTags.js"



export function TagIcons({ handleTagChange, colors }) {
    const [availableTags] = useState(availableTagsList)

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