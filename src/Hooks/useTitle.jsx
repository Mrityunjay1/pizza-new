import {useEffect} from "react";

export function useTitle({openFood,orders}){
    useEffect(()=>{
        if(openFood){
            document.title=openFood.name;
        }else{
            document.title=orders.length === 0 ?"Hungry Lets Order Something" : `[${orders.length}]items in your order`
        }
    })
}