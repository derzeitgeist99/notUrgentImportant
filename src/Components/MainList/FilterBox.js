import React, { useState } from "react";
import { StyledFilterContainer, StyledFilterPill } from "./StyledMainList/FilterBox"
import { availableTagsList } from "../../helperFunctions/availableTags";
import { useColors } from "../../Context/ColorsContext";

export function FilterBox({ setFilter, taskListFilter }) {
    const [availableTags] = useState(availableTagsList)
    const [colors] = useColors()

    const handleFilterPillClick = (event) => {
        event.preventDefault();

        //Second Click sets Tag back to false so you can see all
        (parseInt(event.currentTarget.dataset.tag) === taskListFilter.tag) ?
            setFilter({ tag: false }) :
            setFilter({ tag: parseInt(event.currentTarget.dataset.tag) });

    }

    const handleEditPillClick = (event) => {
        event.preventDefault();
        setFilter({ all: !taskListFilter.all, tag: false })
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
                    brightness={(tag === taskListFilter.tag) ? "90%" : "100%"}
                    shadow={(tag === taskListFilter.tag) ? "4px 4px" : ""}
                >{tag}</StyledFilterPill>
            )
            )}
            <StyledFilterPill
                color={"lightgrey"}
                onClick={(event) => handleEditPillClick(event)}
                borderStyle={(taskListFilter.edit) ? "solid" : "none"}
                style={{ "font-size": "0.85rem", "line-height": "1rem" }}>
                All <br /> Tasks
            </StyledFilterPill>
            <StyledFilterPill
                color={"lightgrey"}
                onClick={(event) => handleNewTaskPillClick(event)}
                style={{ "font-size": "0.85rem", "line-height": "1rem" }}
            >
                New<br /> Task
            </StyledFilterPill>
        </StyledFilterContainer>
    )
}