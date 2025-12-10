import createItem from "./service/itens.js";

const cart = [];

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lambo", 39.99, 3);
 
console.log(item1.subtotal());
console.log(item2.subtotal());