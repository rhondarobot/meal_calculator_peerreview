var diner = function (name, dishes){
	this.name = name;
	this.dishes = dishes;
};

var dish = function(name, price) {
	this.name = name;
	this.price = price;
};

var Steak = new dish('Steak', 15);
var Fish = new dish('Fish', 10);
var Pasta = new dish('Pasta', 9);
var Ceviche = new dish('Ceviche', 13);
var Cheese = new dish('Cheese', 8);
var Calamari = new dish('Calamari', 10);


var Jon = new diner('Jon', [Steak, Calamari]);
var Jhon = new diner('Jhon', [Fish, Ceviche]);
var Jonny = new diner('Jonny', [Cheese, Pasta]);

var meal = function(tax,tip,diners){
 this.diners = diners;
 this.tip = tip;
 this.tax = tax;
 this.total = 0;
 this.subtotal = 0;
 var self = this;
 this.calculatePrice = function(){
   this.diners.map(function(diner){
     diner.dishes.map(function(dish){
       self.subtotal += dish.price;
     });
   });
   this.total = this.subtotal + (this.subtotal * this.tip) + (this.subtotal * this.tax);
 };
};
meal = new meal(0.6,0.20,[Jon,Jhon,Jonny]);
meal.calculatePrice();
console.log('Subtotal:',meal.subtotal);
console.log('Tax:',meal.tax);
console.log('Tip:',meal.tip);
console.log(meal.total);
