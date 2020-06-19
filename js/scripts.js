let testPizza = new Pizza("medium", ["jerkChicken", "pepper", "shadowBenny"]);

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculateSizeCost = function() {
  let basePrice = 14;
  if (this.size === "small") {
    basePrice = basePrice;
  } else if (this.size === "medium") {
    basePrice += 4;
  } else if (this.size === "large") {
    basePrice +=8;
  }
  return basePrice;
}




// Pizza.prototype.cost() {
//   const meat = [curryGoat, iguana, jerkChicken, saltFish, shark];
//   const veggie = [chickpea, garlic, greenOnion, pepper, shadowBenny];
// }