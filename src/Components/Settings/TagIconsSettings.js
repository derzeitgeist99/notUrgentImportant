import React, { useState } from "react";
import { availableTagsList } from "../../helperFunctions/availableTags.js"
import { StyledTagIconsFlex, StyledTagIconsSettings } from "./StyledSettings/StyledSettings.js";

export default function ({ colors }) {
    const [availableTags] = useState(availableTagsList)

    return (
        availableTags.map(tag => (
            <StyledTagIconsFlex>

                <StyledTagIconsSettings
                    color={colors[tag]}
                    key={tag}
                />
            </StyledTagIconsFlex>

        ))
    )
}