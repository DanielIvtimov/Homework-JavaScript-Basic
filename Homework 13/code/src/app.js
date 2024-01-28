class Product {
    constructor(name, category, hasDiscount, price) {
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }
}
const products = [
    new Product("first Product", "Food", true, 25),
    new Product("second Product", "Clothing", false, 30),
    new Product("third Product", "Food", true, 15),
    new Product("Product", "Food", true, 15),
];
const expensiveProducts = products.filter(product => product.price > 20);
console.log("Products with price greater than 20:", expensiveProducts);
const foodProductsWithDiscount = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);
console.log("Names of products from the Food category with discount:", foodProductsWithDiscount);
const discountedPrices = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);
console.log("Price of products on discount:", discountedPrices);
const vowelProductsNotOnDiscount = products
    .filter(product => 'aeiou'.includes(product.name[0].toLowerCase()) && !product.hasDiscount)
    .map(product => ({ name: product.name, price: product.price }));
console.log("Names and prices of products starting with a vowel, not on discount:", vowelProductsNotOnDiscount);



