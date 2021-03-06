import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { palette as GlobalPalette } from "../../Styled/theme"
import { useColors } from "../../Context/ColorsContext";
import TagIconsSettings from "./TagIconsSettings";

export function SetThemeButton() {
    const [availablePalettes] = useState(Object.keys(GlobalPalette))
    const [activePallete, setActivePallete] = useState(window.localStorage.palette)
    const [colors, setColors] = useColors()


    const handlePaletteSelect = ((event, palette) => {
        event.preventDefault()
        window.localStorage.setItem("palette", palette)
        // this impacts grey backround on the button
        setActivePallete(palette)
        // this sets context and impacts overall look of the app
        setColors(GlobalPalette[palette])
    })


    return (<InputGroup className="mb-3" style={{ "z-index": "0" }}>
        <DropdownButton variant="outline-secondary" title="Select" id="segmented-button-dropdown-1">
            {availablePalettes.map((palette, index) =>
                <Dropdown.Item
                    key={index}
                    onClick={event => handlePaletteSelect(event, palette)}
                    style={(palette == activePallete) ? { background: "lightgrey" } : { background: "white" }}
                >
                    {palette} <br />
                    <TagIconsSettings colors={GlobalPalette[palette]} />
                </Dropdown.Item>)}
        </DropdownButton>
    </InputGroup>
    )
}
