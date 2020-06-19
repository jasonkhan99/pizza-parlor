function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.basePrice(size) {
  if (this.size === "small") {
    basePrice = 16;
  } else if (this.size === "medium") {
    basePrice = 20;
  } 

} 

Pizza.prototype.cost() {
  const meat = [curryGoat, iguana, jerkChicken, saltFish, shark];
  const veggie = [chickpea, garlic, greenOnion, pepper, shadowBenny];
  
}

let testPizza = new Pizza("medium", ["jerkChicken", "pepper", "shadowBenny"]);