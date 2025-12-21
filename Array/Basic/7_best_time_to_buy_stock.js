function maxProfit(prices) {
  let maxProfit = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (prices[j] > prices[i] && profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit === Number.NEGATIVE_INFINITY ? 0 : maxProfit;
}

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for(let i=1;i<prices.length;i++){
    if(prices[i]-minPrice>maxProfit){
        maxProfit=prices[i]-minPrice
    }
    if(prices[i]<minPrice){
        minPrice=prices[i]
    }
  }
  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
