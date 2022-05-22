import React, { useState } from "react";
import { StyledFilterContainer, StyledFilterPill } from "../Styled/FilterBox";
import { availableTagsList } from "../helperFunctions/availableTags";
import { palette } from "../Styled/theme"
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineDocumentAdd } from "react-icons/hi"

export function FilterBox({ paletteName, setFilter, taskListFilter }) {
    const [availableTags] = useState(availableTagsList)
    const [colors] = useState(palette[paletteName])

    const handleFilterPillClick = (event) => {
        event.preventDefault();

        //Second Click sets Tag back to false so you can see all
        (parseInt(event.currentTarget.dataset.tag) === taskListFilter.tag) ?
            setFilter({ tag: false }) :
            setFilter({ tag: parseInt(event.currentTarget.dataset.tag) });

    }

    const handleEditPillClick = (event) => {
        event.preventDefault();
        setFilter({ edit: !taskListFilter.edit, tag: false })
    }

    const handleNewTaskPillClick = (event) => {
        event.preventDefault();
        document.getElementById("NewTaskOverlay").style.display = "block";
    }
    return (


        <StyledFilterContainer>
            {availableTags.map((tag) => (
                <StyledFilterPill key={tag}
                    color={colors[tag]}
                    data-tag={tag}
                    onClick={(event) => handleFilterPillClick(event)}
                    borderStyle={(tag === taskListFilter.tag) ? "solid" : "none"}
                >{tag}</StyledFilterPill>
            )
            )}
            <StyledFilterPill
                color={"lightgrey"}
                onClick={(event) => handleEditPillClick(event)}
                borderStyle={(taskListFilter.edit) ? "solid" : "none"}>
                <AiOutlineEdit />
            </StyledFilterPill>
            <StyledFilterPill
                color={"lightgrey"}
                onClick={(event) => handleNewTaskPillClick(event)}
            >
                <HiOutlineDocumentAdd />
            </StyledFilterPill>
        </StyledFilterContainer>
    )
}