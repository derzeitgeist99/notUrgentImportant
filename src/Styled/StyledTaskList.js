import styled from "styled-components";
import { palette } from "./theme";


export const StyledContainer = styled.div`
margin: auto;
width: min(80%);
height: max(100%, 1000px);
display: flex;
flex-direction: column;
justify-content: flex-start;
grid-template-rows: auto;
`

export const StyledTask = styled.div`
margin: 0.0rem;
grid-area: 1 / 1 / 2 / 3;
background-color: ${props => palette[props.palette][props.taskColor]};
`

export const StyledEditTask = styled.input`
/* height: 100%;
width: 100%; */
background-color: beige;
margin: 0;
padding: 0;
grid-area: 1 / 1 / 2 / 3;
border: none;
font-size: 1rem;

`

export const StyledTaskBox = styled.div`
height: max(2.5vh, 100px);
margin: 0.5rem;
display: grid;
grid-template-rows: 1fr 10%;

`

export const StyledEditControlsDiv = styled.div`
grid-area: 2 / 1 / 3 / 3;
margin: 0;
padding: 0;
display: flexbox;
justify-content: flex-end;
align-items: center;

`