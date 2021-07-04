import styled from 'styled-components'
import { Title } from '../Styles/title'

export const FoodGrid=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;


`
export const Food=styled.div`
    height:200px;
    background-image: ${({img})=>`url(${img});`};
    background-position: center;
    background-size: cover;
    padding:10px;
    font-size:20px;
    filter:contrast(75%);
    margin-top:5px;
    border-radius:7px;
    transition-property: box-shadow;
    transition-duration: .1s;
    box-shadow:0px 0px 2px 0px gray;
    &:hover{
        cursor:pointer;
        box-shadow:0px 3px 10px 0px gray;
        filter:contrast(100%);
        margin-top:0px;
        margin-bottom:5px;
    }

`
export const FoodLabel=styled(Title)`
    position:absolute;
    background-color:rgba(255,255,255,0.8) ;
    padding:5px;


`