export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style:'currency',
        currency:"USD"
    })
}

export const foodItems=[{
    name:"cheeze pizza",
    img:"/img/1.jpg",
    section:"pizza",
    price:1
},
{
    name:"Roll",
    img:"/img/2.jpg",
    section:"pizza",
    price:1.5
},
{
    name:"Food Item 2",
    img:"/img/3.jpg",
    section:"pizza",
    price:1.5
},
{
    name:"Food Item 3",
    img:"/img/4.jpg",
    section:"sandwitch",
    price:0.5
},
{
    name:"Food Item 4",
    img:"/img/5.jpg",
    section:"sides",
    price:2
},
{
    name:"Food Item 5",
    img:"/img/6.jpg",
    section:"sides",
    price:6
},
{
    name:"Food Item 26",
    img:"/img/7.jpg",
    section:"sandwitch",
    price:4
},
];
export const foods=foodItems.reduce((res,food)=>{
    if(!res[food.section]){
        res[food.section]=[];
    }
    res[food.section].push(food)
    return res;

},[])