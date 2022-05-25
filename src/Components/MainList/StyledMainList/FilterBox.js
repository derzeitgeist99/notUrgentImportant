import styled from "styled-components";

export const StyledFilterContainer = styled.div`
display: flex;
justify-content: center; 
flex-wrap: wrap;
margin: 0.7rem auto;`


export const StyledFilterPill = styled.div`
width: max(50px, 10%);
height: 22px;
border-radius: 10px;
border-style: ${props => props.borderStyle};
border-width: 2px;
background-color: ${props => props.color};
text-align: center;
margin-left: 5px;
margin-right: 5px;
//This one drives me mad: why won't he center!!!
vertical-align: middle;
cursor: pointer;

`