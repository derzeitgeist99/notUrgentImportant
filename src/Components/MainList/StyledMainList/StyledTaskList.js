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


margin-bottom: 1rem;
display: grid;
grid-template-rows: 120px auto;
`

export const StyledTask = styled.div`
background-color: ${props => props.backgroundColor} ;
margin: 0.0rem;
padding: 2rem;
font-size: 1rem;

`


export const StyledEditControlsDiv = styled.div`
padding: 0;
background-color: white;

`
