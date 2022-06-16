import styled from "styled-components";

export const StyledFilterContainer = styled.div`
display: flex;
justify-content: center; 
flex-wrap: wrap;
margin: 0.7rem auto;
`


export const StyledFilterPill = styled.p`
width: max(40px, 10%);
height: 30px;
border-radius: 10px;
filter: brightness(${props => props.brightness});
border-width: 2px;
background-color: ${props => props.color};
box-shadow: ${props => props.shadow};
text-align: center;
margin-left: 5px;
margin-right: 5px;
opacity: 100%;
//box-sizing: border-box;
line-height: 30px;
//This one drives me mad: why won't he center!!!
cursor: pointer;

&:hover {
    filter: brightness(90%);
    box-shadow: 4px 4px;
    
}

`