import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const AddLink = styled(NavLink)`
  &.active {color: red;}
`
export const BackLink = styled(Link)`
background-color: grey;
  color: black;
  font-weight: 700;
  border: 1px solid black;
  width: 100px;
  justify-content: center;
`;

export const Section = styled.section`
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
`