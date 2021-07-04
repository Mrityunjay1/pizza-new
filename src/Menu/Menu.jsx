import React from 'react'
import styled from 'styled-components'
import {foods} from '../Data/Fooddata'
import {Food,FoodGrid,FoodLabel} from "./FoodGrid"
import {formatPrice} from '../Data/Fooddata'


const MenuStyle =styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`
export default function Menu({setOpenFood}) {
    return (
        
        <MenuStyle >
        {Object.entries(foods).map(([sectionName,foods])=>(
            <>
            <h1>{sectionName}</h1>
            <FoodGrid>
            {foods.map((food)=>{
                return (
                    <Food img={food.img} onClick={()=>{
                        setOpenFood(food)
                    }}>
                    <FoodLabel><div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>

                    </FoodLabel>
                    </Food>
                )
            })}
            </FoodGrid>
            </>
        ))}
       
        </MenuStyle>
    )
}
