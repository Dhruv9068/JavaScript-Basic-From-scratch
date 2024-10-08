const mynums =[1,2,3];


const myTotal = mynums.reduce(function(acc, curr){console.log(`acc: ${acc}  curr: ${curr}`);
return acc+curr},0)


const mytotal =mynums.reduce((acc,curr) => acc+curr,0)
console.log(mytotal)



// Example of a shopping cart object
let shoppingCart = [
    { product: "Product 1", price: 10.99, quantity: 2 },
    { product: "Product 2", price: 9.99, quantity: 3 },
    { product: "Product 3", price: 12.99, quantity: 1 },
    { product: "Product 4", price: 11.99, quantity: 2 },
    { product: "Product 5", price: 10.99, quantity: 1 },
  ];
  
  console.log("Shopping Cart:");
  console.log(shoppingCart);
  
  // Using reduce to increase the quantity of each item in the shopping cart
  let updatedShoppingCart = shoppingCart.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    currentValue.quantity += 1; // Increase the quantity of each item
    accumulator.push(currentValue);
    return accumulator;
  }, []);
  
  console.log("Updated Shopping Cart:");
  console.log(updatedShoppingCart);
  
  // Using reduce to calculate the total cost of the updated shopping cart
  let totalCost = updatedShoppingCart.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue.price * currentValue.quantity}`);
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);
  
  console.log(`Total Cost: ${totalCost}`);
  
  // Using reduce to calculate the total quantity of the updated shopping cart
  let totalQuantity = updatedShoppingCart.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue.quantity}`);
    return accumulator + currentValue.quantity;
  }, 0);
  
  console.log(`Total Quantity: ${totalQuantity}`);