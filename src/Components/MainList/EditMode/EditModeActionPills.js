import React from "react";
import { StyledActionPill } from "../StyledMainList/FilterBox";
// Icons
import { MdCancel } from "react-icons/md"
import { HiOutlineDocumentAdd } from "react-icons/hi"
import { IoTrashBin } from "react-icons/io5"

export default function EditModeActionPills({ action, handleAccept, handleCancel }) {


    return (
        <>
            {(action === "Create") &&
                <StyledActionPill
                    onClick={(event) => handleAccept(event)}
                    data-action="create"
                    color="blue"
                    pillType="action"

                >OK</StyledActionPill>
            }

            {(action === "Update") &&
                <StyledActionPill
                    onClick={(event) => handleAccept(event)}
                    data-action="update"
                    color="green"
                    pillType="action"

                >OK</StyledActionPill>
            }
            {(action === "Update") &&
                <StyledActionPill
                    onClick={(event) => handleAccept(event)}
                    data-action="delete"
                    color="orange"
                    pillType="action"

                ><IoTrashBin /></StyledActionPill>
            }

            <StyledActionPill
                onClick={(event) => handleCancel(event)}
                color="red"
                pillType="action"

            ><MdCancel /></StyledActionPill>
        </>
    )
}