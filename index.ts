import products from "./products"

const productName: string = "beanie"

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
  return preOrder;
}

console.log(product)
orderStatus(product)