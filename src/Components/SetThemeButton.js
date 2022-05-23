import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { palette } from "../Styled/theme";
import { TagIcons } from "./TagIcons";

export function SetThemeButton() {
    const [availablePalettes] = useState(Object.keys(palette))
    const [activePallete, setActivePallete] = useState(window.localStorage.palette)

    const handlePaletteSelect = ((event, palette) => {
        event.preventDefault()
        window.localStorage.setItem("palette", palette)
        setActivePallete(palette)
    })


    return (<InputGroup className="mb-3">
        <DropdownButton variant="outline-secondary" title="Select" id="segmented-button-dropdown-1">
            {availablePalettes.map((palette, index) =>
                <Dropdown.Item
                    key={index}
                    onClick={event => handlePaletteSelect(event, palette)}
                    style={(palette == activePallete) ? { background: "lightgrey" } : { background: "white" }}
                >
                    {palette} <TagIcons activePalette={palette} />
                </Dropdown.Item>)}

        </DropdownButton>

    </InputGroup>
    )
}
