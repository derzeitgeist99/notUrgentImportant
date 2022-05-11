import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoTrashBinSharp } from "react-icons/io5";
import { StyledEditControlsDiv, StyledTask, StyledTaskBox } from "../Styled/StyledTaskList";
import { TagIcons } from "./TagIcons";

export function TaskBox({ task, handleEditButton }) {

    const userSettings = { palette: "clean" }


    return <StyledTaskBox>
        <StyledTask taskColor={task.tag} palette={userSettings.palette}>{task.taskDescription}</StyledTask>
        <StyledEditControlsDiv>
            {/* <TagIcons taskIndex={index} renderCounter={renderCounter} setRenderCounter={setRenderCounter} /> */}
            <AiOutlineEdit onClick={event => handleEditButton(event, task.taskId)} style={{
                "color": "blue",
                "cursor": "pointer"
            }} />
            {/*
            <IoTrashBinSharp onClick={event => handleDelete(event, index)} style={{
                "color": "black",
                "cursor": "pointer"
            }} /> */}
        </StyledEditControlsDiv>
    </StyledTaskBox>;
}
