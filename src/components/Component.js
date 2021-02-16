import styled from 'styled-components'
import { colors } from './../theam'

const boxshadow = '-1px 2px 46px -3px rgba(0,0,0,0.38)';


export const H1 = styled.div`
height: 50px;
padding: 10px;
overflow:hidden;
font-size:19px;
background:${colors.primary};
color: ${colors.white};
`;

export const List = styled.li`
   border-radius:15px;
   cursor: pointer;
   list-style:none;
   background: ${colors.white};
   box-shadow: ${boxshadow};
   margin: 10px 0;
   overflow:hidden;
   width :100%;
   display:flex;
   justify-content:flex-start;
   p{
       margin: 30px 10px;
       font-size:18px;
   }
`;



