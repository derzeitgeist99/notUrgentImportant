import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export function SetNumberOfTasksButton() {
    const [numberOfTasks, setNumberOfTasks] = useState(window.localStorage.numberOfTasks)

    const myArr = [1, 2, 3, 4, 5, 6]

    const handleTasksSelect = ((event, number) => {
        event.preventDefault()
        window.localStorage.setItem("numberOfTasks", number)
        setNumberOfTasks(number)

    })

    return (<InputGroup className="mb-3">
        <DropdownButton variant="outline-secondary" title="Select" id="segmented-button-dropdown-1">
            {myArr.map(number =>
                <Dropdown.Item
                    key={number}
                    onClick={event => handleTasksSelect(event, number)}
                    style={(number == numberOfTasks) ? { background: "lightgrey" } : { background: "white" }}
                >
                    {number}
                </Dropdown.Item>)}

        </DropdownButton>

    </InputGroup>
    )
}
