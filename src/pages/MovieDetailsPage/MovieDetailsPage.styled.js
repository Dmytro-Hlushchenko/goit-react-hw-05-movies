import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const AddLink = styled(NavLink)`
  &.active {color: red;}
`
export const BackLink = styled(Link)`
  color: black;
  background-color: grey;
  font-weight: 700;
  border-radius: 10%;
   border: 1px solid black;
  width: 100px;
  justify-content: center;
`;