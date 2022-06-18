import React, { useState } from "react";
import { availableTagsList } from "../../helperFunctions/availableTags.js"
import { StyledActionPill } from "./StyledMainList/FilterBox.js";



export function TagIcons({ handleTagChange, colors }) {
    const [availableTags] = useState(availableTagsList)

    return (
        availableTags.map((tag) => (
            <StyledActionPill
                color={colors[tag]}
                data-tag={tag} //https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
                onClick={(event) => handleTagChange(event)}
                key={tag}
                pillType="action"
            >{tag}</StyledActionPill>
        )
        )
    )
}
