import styled from "styled-components";

export const StyledFilterContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between; 
flex-wrap: wrap;
margin: auto ;
margin-top: 0.7rem ;

`

export const StyledActionPill = styled.p`

// these properties are different for action or filter pill

width: ${props => (props.pillType === "filter") ? "15%" : "100%"};
height: ${props => (props.pillType === "filter") ? "30px" : "100%" };

// these properties are same for action and filter pills
border-radius: 10px;
filter: brightness(${props => props.brightness});
background-color: ${props => props.color};
box-shadow: ${props => props.shadow};
text-align: center;


cursor: pointer;

&:hover {
    filter: brightness(90%);
    box-shadow: 4px 4px;
    
}

`