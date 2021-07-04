import styled from "styled-components"
import {DialogContent,DialogFooter,ConfirmButton} from "../FoodDialog/FoodDialog"

const OrderStyled =styled.div`
    position:fixed;
    right:0px;
    top:48px;
    width:340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index:10;
    box-shadow:4px 0px 5px 4px gray;
    display:flex;
    flex-direction:column;

`

const OrderContent=styled(DialogContent)`
    padding:20px;
    min-height:100px;
    height:100%;

`



export default function Order() {
    return (
        <OrderStyled>
                <OrderContent>Cart is Empty</OrderContent>
                <DialogFooter>
                    <ConfirmButton>CheckOut</ConfirmButton>
                </DialogFooter>
        </OrderStyled>
    )
    }
