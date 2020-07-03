import styled from 'styled-components'
import { colors } from './../theam'

export const Imgbox = styled.div`
border-radius:10px;
height:300px;
background-repeat:no-repeat !important;
background-position:center !important;
background-size:cover !important;
`;
export const MovieCard = styled.div`
    background: ${colors.white};
    border-radius:10px;
    margin: 10px 0;
    overflow:hidden;
    min-width:200px;
    max-width:400px;
    box-shadow: -1px 2px 46px -3px rgba(0,0,0,0.38);
    .wraper-title{
        height:30px;
        padding:10px;
    }
    h1{
        color: ${colors.black};
        margin:5px 15px;
        font-size:18px;
    }
    svg{
        height:15px;
        width:15px;
        padding:0;
    }
`;