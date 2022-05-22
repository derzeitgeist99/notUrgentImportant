import React from "react";
import { Main } from "../Styled/main";
import { StyledNewTaskOverlay } from "../Styled/StyledNewTaskOverlay";
import { StyledContainer, StyledTaskBox } from "../Styled/StyledTaskList";
import EditTask from "./EditTask";

export function NewTask({ updateIncrementallyTaskListdata, setIsEdit, palette, action }) {
    const handleOutsideClick = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        if (event.target.id === "NewTaskOverlay") {
            document.getElementById("NewTaskOverlay").style.display = "none"
        }
    }
    return (


        <StyledNewTaskOverlay id="NewTaskOverlay"
            style={{ display: "none" }}
            onClick={(event) => handleOutsideClick(event)} >
            <Main>
                <StyledContainer id="NewTaskContainer"
                    style={{ backgroundColor: "white", top: "100px", position: "relative" }}>


                    <StyledTaskBox
                        taskColor=""
                        palette={palette}
                    >
                        <EditTask
                            defaultValue="your Task goes here"
                            defaultTag="1"
                            updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                            setIsEdit={setIsEdit}
                            action="Create" />

                    </StyledTaskBox>
                </StyledContainer>
            </Main>
        </StyledNewTaskOverlay>

    )
}