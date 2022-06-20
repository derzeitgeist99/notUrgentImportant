import styled from "styled-components";

export const StyledSettingsLine = styled.div`
display: grid;
grid-template-columns: auto 1fr;
grid-column-gap: 1rem;
`

export const StyledTagIconsSettings = styled.div`

// these properties are different for action or filter pill
width: 20px;
height: 20px;

// these properties are same for action and filter pills
border-radius: 50%;
background-color: ${props => props.color};
text-align: center;
margin-inline: 2px;

`

export const StyledTagIconsFlex = styled.div`
display: inline-flex;
`