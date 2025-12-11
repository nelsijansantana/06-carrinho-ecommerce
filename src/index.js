import createItem from "./service/itens.js";
import * as cartService from "./service/cart.js";

const myCart = [];
const myWishiList = [];

console.log("Welcome to your shopee cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 5);
const item2 = await createItem("Hotwheels Lambo", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishiList, item2);
await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

console.log("Shopee Cart TOTAL IS:");
await cartService.caltulateTotal(myCart);
