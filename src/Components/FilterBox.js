import React, { useState } from "react";
import { StyledFilterContainer, StyledFilterPill } from "../Styled/FilterBox";
import { availableTagsList } from "../helperFunctions/availableTags";
import { palette } from "../Styled/theme"
import { AiOutlineEdit } from "react-icons/ai";

export function FilterBox({ paletteName }) {
    const [availableTags] = useState(availableTagsList)
    const [colors] = useState(palette[paletteName])
    return (


        <StyledFilterContainer>
            {availableTags.map((tag) => (
                <StyledFilterPill key={tag}
                    color={colors[tag]}>{tag}</StyledFilterPill>
            )
            )}
            <StyledFilterPill
                color={"lightgrey"}>
                <AiOutlineEdit /> Edit
            </StyledFilterPill>
        </StyledFilterContainer>
    )
}