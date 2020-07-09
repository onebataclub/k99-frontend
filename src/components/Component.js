import styled from 'styled-components'
import { colors } from './../theam'

const boxshadow = '-1px 2px 46px -3px rgba(0,0,0,0.38)';

export const Imgbox = styled.div`
height:260px;
width:100%;
background-repeat:no-repeat !important;
background-position:center !important;
background-size:cover !important;
position:relative;
`;
export const MovieCard = styled.div`
    margin: 5px;
    .movies-card{
        background: ${colors.white};
        border-radius:10px;
        margin: 10px 0;
        overflow:hidden;
        box-shadow: ${boxshadow};
        .title{
            height:30px;
            padding:10px;
            h1{
                color: ${colors.white};
                margin:5px 15px;
                font-size:16px;
            }
        }
    }
`;
export const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    iframe{
        padding: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius:15px;
        box-shadow: ${boxshadow};
    }
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
export const Listwrap = styled.ul`
    border-radius:15px ;
    overflow:auto;
    margin: 0;
    padding: 0;
    max-height: 600px;
`;
export const Thum = styled.div`
    margin: 0;
    height:93px;
    width:80px;
    background-repeat:no-repeat !important;
    background-position:center !important;
    background-size:cover !important;
`;
export const Btnwrap = styled.div`
    display: flex;
    justify-content:space-between;
    color: ${colors.primary};
    margin-top: 10px;
    ion-icon{
        background:${colors.primary};
        width:50px;
        height: 50px;
        padding: 5px 10px;
        border-radius:5px;
        box-shadow: ${boxshadow};
    }
`;
export const Icon = styled.div`
    ion-icon{
        padding: 10px;
        position:absolute;
        display: inline-block;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border-radius:50%;
        width:30px;
        height: 30px;
        background:${colors.primary};
    }
`;
