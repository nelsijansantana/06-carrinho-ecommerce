// Quais ações meu carrinho pode fazer?
// Casos de uso
/**
 * Adicionar item
 * Deletar item
 * Remover item
 * Calcular o total
 */

// add item
async function addItem(userCart, item) {
  userCart.push(item);
}

// calculate total
async function caltulateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n💲Total: ${result}`);
}

// delete item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remove item
async function removeItem(userCart, index) {
  const deleteIndex = index - 1;

  if(index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${item.price} | ${
        item.quantity
      } | Subtotal ${item.subtotal()}`
    );
  });
}

export { addItem, caltulateTotal, deleteItem, removeItem, displayCart };
