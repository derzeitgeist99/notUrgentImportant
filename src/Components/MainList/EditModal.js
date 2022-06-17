import React from "react";
import { Main } from "../../Styled/main";
import EditTask from "./EditTask";
import { StyledTaskBoxModal, StyledNewTaskOverlay } from "./EditMode/StyledTagIconGroup";

export function EditModal({ taskKey, defaultValue, defaultTag, updateIncrementallyTaskListdata, setIsEdit, action }) {
    const handleOutsideClick = (event) => {
        event.preventDefault();
        if (event.target.id === "EditModal") {
            setIsEdit({ taskKey: undefined, editMode: undefined })
        }
    }
    return (


        <StyledNewTaskOverlay id="EditModal"
            onClick={(event) => handleOutsideClick(event)} >
            <Main>

                <StyledTaskBoxModal>
                    <EditTask
                        taskKey={taskKey}
                        defaultValue={defaultValue}
                        defaultTag={defaultTag}
                        updateIncrementallyTaskListdata={updateIncrementallyTaskListdata}
                        setIsEdit={setIsEdit}
                        action={action} />

                </StyledTaskBoxModal>

            </Main>
        </StyledNewTaskOverlay>

    )
}