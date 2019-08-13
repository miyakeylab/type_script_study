function taxed(amount:number) : number {
    return amount * 1.1 
}

function fee(amount:number) : number {
    return amount * 1.4 
}
function price(amount:number): number {
    return `${fee(amount)}`
}
    // NaN防止
// console.log(expo2('1,000'))
// console.log(expo2(1000))