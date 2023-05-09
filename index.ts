import products from "./products"

const productName: string = "fanny pack"

const product = products.find(product => product.name === productName);

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