import React, { useContext, useState } from "react";
import { palette } from "../Styled/theme"

const ColorsContext = React.createContext([])
const useColors = () => useContext(ColorsContext)

const ColorsProvider = ({ children }) => {
    // check if local storage exists
    const localPalette = (window.localStorage.palette) ? window.localStorage.palette : Object.keys(palette)[0]
    const [colors, setColors] = useState(palette[localPalette])


    return (
        <ColorsContext.Provider value={[colors, setColors]}>
            {children}
        </ColorsContext.Provider>
    )
}

export { ColorsProvider, useColors }