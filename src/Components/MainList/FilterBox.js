import React, { useState } from "react";
import { StyledFilterContainer, StyledActionPill } from "./StyledMainList/FilterBox"
import { availableTagsList } from "../../helperFunctions/availableTags";
import { useColors } from "../../Context/ColorsContext";

export function FilterBox({ setFilter, taskListFilter, setIsEdit }) {
    const [availableTags] = useState(availableTagsList)
    const [colors] = useColors()

    const handleFilterPillClick = (event) => {
        event.preventDefault();

        //Second Click sets Tag back to false so you can see all
        (parseInt(event.currentTarget.dataset.tag) === taskListFilter.tag) ?
            setFilter({ tag: false }) :
            setFilter({ tag: parseInt(event.currentTarget.dataset.tag) });

    }

    const handleAllPillClick = (event) => {
        event.preventDefault();
        setFilter({ all: !taskListFilter.all, tag: false })
        console.log("Filter", taskListFilter.all);
    }

    const handleNewTaskPillClick = (event) => {
        event.preventDefault();
        setIsEdit({ taskKey: "new", editMode: "Create" })

    }
    return (


        <StyledFilterContainer>

            {availableTags.map((tag) => (
                <StyledActionPill key={tag}
                    color={colors[tag]}
                    data-tag={tag}
                    onClick={(event) => handleFilterPillClick(event)}
                    brightness={(taskListFilter.tag === tag) ? "90%" : "100%"}
                    shadow={(tag === taskListFilter.tag) ? "4px 4px" : ""}
                    pillType="filter"
                >{tag}</StyledActionPill>
            )
            )}
            <StyledActionPill
                color={"lightgrey"}
                onClick={(event) => handleAllPillClick(event)}
                brightness={(taskListFilter.all) ? "90%" : "100%"}
                shadow={(taskListFilter.all) ? "4px 4px" : ""}
                style={{ "fontSize": "0.85rem", "lineHeight": "1rem" }}
                pillType="filter">
                All <br /> Tasks
            </StyledActionPill>
            <StyledActionPill
                color={"lightgrey"}
                onClick={(event) => handleNewTaskPillClick(event)}
                style={{ "fontSize": "0.85rem", "lineHeight": "1rem" }}
                pillType="filter"
            >
                New<br /> Task
            </StyledActionPill>

        </StyledFilterContainer>
    )
}