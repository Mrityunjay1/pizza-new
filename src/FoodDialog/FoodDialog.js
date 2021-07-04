import styled from "styled-components";
import React from "react"
import {FoodLabel} from "../Menu/FoodGrid"
import {pizzaRed} from "../Styles/colors"
import {Title} from "../Styles/title"
import {formatPrice} from "../Data/Fooddata.jsx"
import QuantityInput from "./QuantityInput";
import {useQuantity} from "../Hooks/useQuantity"

const Dialog=styled.div`
    width:500px;
    background-color:white;
    position:fixed;
    top:75px;
    z-index:5;
    max-height: calc(100% - 100px);
    left:calc(50% - 250px);
    display:flex;
    flex-direction:column;
`;
const DialogShadow=styled.div`
    position: fixed;
    height:100%;
    width:100%;
    top:0px;
    background-color: black;
    opacity:0.7;
    z-index:4;

`;
const DialogBanner=styled.div`
    min-height:200px;
    margin-bottom:20px;
    ${({img})=>`background-image:url(${img});`};
    background-position: center;
    background-size: cover;

`;
const DialogBannerName=styled(FoodLabel)`
    top:100px;
    font-size:30px;
    padding:20px;
`;
export const DialogContent=styled.div`
    overflow:auto;
    min-height:100px;
    padding:0px 48px;
`;
export const DialogFooter=styled.div`
    box-shadow:0px -2px 10px 0px gray;
    height:60px;
    display:flex;
    justify-content:center;

`;
export const ConfirmButton=styled(Title)`
    margin:10px;
    color:black;
    height:20px;
    border-radius:5px;
    padding:10px;
    text-align:center;
    width:200px;
    cursor:pointer;
    background-color:${pizzaRed}


`
export function getPrice(order){
    return order.quantity * order.price;
}


function FoodDialogContainer({openFood,setOpenFood,setOrders,orders}) {
    const quantity = useQuantity(openFood && openFood.quantity)
    function close() {
        setOpenFood();
    }
    

    const order={
        ...openFood,
        quantity: quantity.value
    }

    function addToOrder(){
        setOrders([...orders,order]);
        close();
    }
    return (
        openFood ?(
        <>
             <DialogShadow onClick={close} />
            <Dialog>
                <DialogBanner img={openFood.img}>
                <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}/>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={addToOrder}>Add To Order:{formatPrice(getPrice(order))} </ConfirmButton>
                </DialogFooter>
                
            </Dialog>
           
        </>): null
    )
}

export default function FoodDialog(props){
    if(!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}
