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
grid-template-rows: 100px 20px;
grid-template-columns: auto 20px;
`

export const StyledTask = styled.div`
background-color: ${props => props.backgroundColor} ;
margin: 0.0rem;
padding: 2rem;
fontSize: 1rem;
grid-row: 1 /3 ;
grid-column: 1/3;


`


export const StyledEditModeDiv = styled.div`
padding: 0.2rem;
place-self: center;
grid-row: 2/3 ;
grid-column: 2/3 ;

`
