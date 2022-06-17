import styled from "styled-components";



export const StyledNewTaskOverlay = styled.div`
  display: block;
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  `

export const StyledTaskBoxModal = styled.div`
position: relative;
top:100px;

height: 400px;
margin-bottom: 2rem;
background-color: white;

margin: auto;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;

`

export const StyledEditTaskInput = styled.input`
width: 80%;
height: 120px;
margin: auto;
padding: 0;
grid-area: 1 / 1 / 2 / 3;
border-style: solid;
font-size: 1rem;
padding: 2rem;
background-color: ${props => props.backgroundColor} ;

`
export const StyledIconGroup = styled.div`
margin: auto;
width: 80%;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
grid-gap: 10px;
`