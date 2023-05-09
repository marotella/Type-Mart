"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = "fanny pack";
var product = products_1.default.find(function (product) { return product.name === productName; });
var orderStatus = function (product) {
    var preOrder = Boolean(product.preOrder === 'true');
    console.log(preOrder);
    if (preOrder) {
        console.log('We will send you a message when your product is on its way.');
    }
    return preOrder;
};
console.log(product);
orderStatus(product);