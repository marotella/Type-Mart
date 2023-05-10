"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = "shirt";
var product = products_1.default.find(function (product) { return product.name === productName; });
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
var orderStatus = function (product) {
    var preOrder = Boolean(product.preOrder === 'true');
    console.log(preOrder);
    if (preOrder) {
        console.log('We will send you a message when your product is on its way.');
    }
    var shippingCost;
    if (product.price > 25) {
        shipping = 0;
        shippingCost = "We are offering free shipping as your item is over $25";
    }
    console.log(shippingCost);
    return preOrder;
};
orderStatus(product);
