import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"
import { availableTagsList } from "../../helperFunctions/availableTags.js"
import { StyledFilterPill } from "./StyledMainList/FilterBox.js";



export function TagIcons({ handleTagChange, colors }) {
    const [availableTags] = useState(availableTagsList)

    return (
        availableTags.map((tag) => (
            <StyledFilterPill
                color={colors[tag]}
                data-tag={tag} //https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
                onClick={(event) => handleTagChange(event)}
                key={tag}
            //brightness={(tag === taskListFilter.tag) ? "90%" : "100%"}
            //shadow={(tag === taskListFilter.tag) ? "4px 4px" : ""}
            >{tag}</StyledFilterPill>
        )
        )
    )
}
