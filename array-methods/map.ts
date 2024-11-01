const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrice = prices.map((num) => num / 2);
console.log('prices: ', prices, 'sale prices: ', salePrice);

const formatted = prices.map((num) => num.toFixed(2));
console.log(formatted);
