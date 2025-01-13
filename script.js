const userOrder = prompt(
  "Please enter your orders, each flavor separated by a comma.",
   "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(userOrder);

//Create an array from the prompt
const orderArray = userOrder.split(",");
console.log(orderArray);
// Create an empty object literal for the list
const orderList = {};
// Loop through array of flavors and check if flavors
// are in the list. If not, add to the list and set qty
// to 1. if Already in orderlist, increase qty by 1.

for (let i = 0; i < orderArray.length; i++) {
  if (orderList[orderArray[i]]) {
    orderList[orderArray[i]] += 1;
  } else {
    orderList[orderArray[i]] = 1;
  }
}

// display orders in table

console.table(orderList);
