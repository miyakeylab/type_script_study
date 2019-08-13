"use strict";
function taxed(amount) {
    return amount * 1.1;
}
function fee(amount) {
    return amount * 1.4;
}
function price(amount) {
    return "" + fee(amount);
}
// NaN防止
// console.log(expo2('1,000'))
// console.log(expo2(1000))
