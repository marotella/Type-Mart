import products from "./products"

const productName: string = "shirt"

const product = products.find(product => product.name === productName);
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string;

const orderStatus = (product) =>{
  const preOrder = Boolean(product.preOrder === 'true');
  console.log(preOrder);
  if (preOrder) {
    console.log('We will send you a message when your product is on its way.');
  }
  
  let shippingCost;
  if (product.price > 25) {
    shipping = 0
    shippingCost = "We are offering free shipping as your item is over $25"
  }
  if(shippingAddress.match("New York")){
    taxPercent = 0.1
  }else{
    taxPercent = 0.05
  }
  console.log(shippingCost)
  return preOrder;
}

orderStatus(product)