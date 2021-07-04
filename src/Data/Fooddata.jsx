export const foodItems=[{
    name:"cheeze pizza",
    img:"/img/1.jpg",
    section:"pizza"
},
{
    name:"Roll",
    img:"/img/2.jpg",
    section:"pizza"
},
{
    name:"Food Item 2",
    img:"/img/3.jpg",
    section:"pizza"
},
{
    name:"Food Item 3",
    img:"/img/4.jpg",
    section:"sandwitch"
},
{
    name:"Food Item 4",
    img:"/img/5.jpg",
    section:"sides"
},
{
    name:"Food Item 5",
    img:"/img/6.jpg",
    section:"sides"
},
{
    name:"Food Item 26",
    img:"/img/7.jpg",
    section:"sandwitch"
},
];
export const foods=foodItems.reduce((res,food)=>{
    if(!res[food.section]){
        res[food.section]=[];
    }
    res[food.section].push(food)
    return res;

},[])