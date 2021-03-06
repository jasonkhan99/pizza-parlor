// function Order() {
//   this.pizzas = [];
//   this.currentId = 0;
//   this.total = 0;
// }

// Order.prototype.addPizza = function(pizza) {
//   pizza.id = this.assignId();
//   this.pizzas.push(pizza);
// }

// Order.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// Further Exploration that I will tinker with later
// Order.prototype.orderCost = function() {    
//   for (let i=0; i< this.pizzas.length; i++) {
//     this.total += this.pizzas[i].pizza.price;
//   }
//   return this.total
// }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 14;
}

Pizza.prototype.calculateSizeCost = function() {
  if (this.size === "Small") {
    this.price = 14;
  } else if (this.size === "Medium") {
    this.price += 4;
  } else if (this.size === "Large") {
    this.price +=8;
  }
  return this.price;
}

Pizza.prototype.calculateVeggieCost = function() {
  const veggie = ["Chickpea", "Garlic", "Green Onion", "Pepper", "Shadow Benny"];
  for (let i=0; this.toppings.length > i; ++i) {
    if (veggie.includes(this.toppings[i])) {
      this.price += 1.5;
    }
  }
  return this.price;
}

Pizza.prototype.calculateMeatCost = function() {
  const meat = ["Curry Goat", "Iguana", "Jerk Chicken", "Salt Fish", "Shark"];  
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
    let price = 14;
    let pizza = new Pizza(inputtedSize, inputtedToppings, price);
    pizza.calculateSizeCost();
    pizza.calculateVeggieCost();
    pizza.calculateMeatCost();
    $("ol#output").append("<li> Your " + inputtedSize + " " + inputtedToppings.join(", ") + " Pizza is $" + pizza.price.toFixed(2) + "</li>");
  });
});