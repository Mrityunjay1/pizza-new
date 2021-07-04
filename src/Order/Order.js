import styled from "styled-components"
import { DialogContent, DialogFooter, ConfirmButton } from "../FoodDialog/FoodDialog"
import {formatPrice} from "../Data/Fooddata.jsx"
import {getPrice} from "../FoodDialog/FoodDialog"

const OrderStyled = styled.div`
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

const OrderContent = styled(DialogContent)`
    padding:20px;
    min-height:100px;
    height:100%;

`
const OrderContainer = styled.div`
    padding:10px 0px;
    border-bottom:1px solid grey;

`
const OrderItems = styled.div`
padding:10px 0px;
display:grid;
grid-template-columns:20px 150px 20px 50px ;
justify-content:space-between;
`



export default function Order({ orders }) {
    return (
        <OrderStyled>
            {orders.length === 0 ?
                <OrderContent>Cart is Empty</OrderContent> : (
                    <OrderContent><OrderContainer>Your Orders: </OrderContainer>
                    
                    {orders.map((order)=>{
                        return(
                            <OrderContainer><OrderItems><div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div></div>
                            <div>{formatPrice(getPrice(order))}</div>
                            </OrderItems></OrderContainer>
                        )
                    })}
                    </OrderContent>)}
            <DialogFooter>
                <ConfirmButton>CheckOut</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}
