// let testPizza = new Pizza("medium", ["jerkChicken", "pepper", "shadowBenny"]);

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 14;
}

Pizza.prototype.calculateSizeCost = function() {
  if (this.size === "small") {
    this.price = price;
  } else if (this.size === "medium") {
    this.price += 4;
  } else if (this.size === "large") {
    this.price +=8;
  }
  return this.price;
}

Pizza.prototype.calculateVeggieCost = function() {
  const veggie = ["chickpea", "garlic", "greenOnion", "pepper", "shadowBenny"];
  for (let i=0; this.toppings.length > i; ++i) {
    if (veggie.includes(this.toppings[i])) {
      this.price += 1.5;
    }
  }
  return this.price;
}

Pizza.prototype.calculateMeatCost = function() {
  const meat = ["curryGoat", "iguana", "jerkChicken", "saltFish", "shark"];  
  for (let i=0; this.toppings.length > i; ++i) {
    if (meat.includes(this.toppings[i])) {
      this.price += 3;
    }
  }
  return this.price;
}

$(document).ready(function() {
  $("form#buildPizza").submit(function() {
    event.preventDefault();
    let inputtedSize = $("#selectSize").val();
    let inputtedToppings = [];
    $("input:checkbox[name=pizzaToppings]:checked").each(function() {
      inputtedToppings.push($(this).val());
    });
    let pizza = new Pizza(inputtedSize, inputtedToppings);
    console.log(inputtedSize);
    console.log(inputtedToppings);
    console.log(pizza);
  });
});