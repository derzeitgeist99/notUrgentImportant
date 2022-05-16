import styled from "styled-components";

export const StyledFilterContainer = styled.div`
display: flex;
justify-content: center; 
flex-wrap: wrap;`


export const StyledFilterPill = styled.p`
width: max(50px, 15%);
border-radius: 10px;
background-color: ${props => props.color};
text-align: center;
margin-left: 5px;
margin-right: 5px;
cursor: pointer;

`