import styled from "styled-components";

//Here
export const StyledContainer = styled.div`
margin: auto;
width: min(80%);
height: max(100%, 1000px);
display: flex;
flex-direction: column;
justify-content: flex-start;

`
export const StyledTaskBox = styled.div`
height: max(2.5vh, 120px);
margin: 0.5rem;
display: grid;
grid-template-rows: 1fr 15%;
background-color: ${props => props.backgroundColor} ;
`

export const StyledTask = styled.div`
margin: 0.0rem;
padding: 2rem;
grid-area: 1 / 1 / 2 / 3;
`

export const StyledEditTask = styled.input`
margin: 0;
padding: 0;
grid-area: 1 / 1 / 2 / 3;
border-style: solid;
font-size: 1rem;
padding: 2rem;
background-color: inherit;

`


export const StyledEditControlsDiv = styled.div`
grid-area: 2 / 1 / 3 / 3;
margin: 0;
padding: 0;
display: flexbox;
justify-content: flex-end;
align-items: center;
background-color: white;

`