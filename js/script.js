function size(name) {
    this.sizeName = name;
}

size.prototype.priceSize = function() {
    if (this.sizeName === "large") {
        // alert("Large");
        return 1500;
    } else if(this.sizeName === "medium") {
        // alert("Not large");
        return 1150;
    } else if(this.sizeName === "small") {
        return 900;
    } else {
        alert("Please select a pizza size");
    }
}

function crust(name) {
    this.crustName = name;
}

crust.prototype.crustPrice = function() {
    if (this.crustName === "cheese") {
        // alert("cheese");
        return 100;
    } else if (this.crustName === "thin") {
        return 70;
    } else if (this.crustName === "neapolitan") {
        return 120;
    } else {
        alert("Please select a prefferable crust to continue");
    }
}

function topping(name) {
    this.toppingName = name;
}

topping.prototype.toppingPrice = function() {
    if (this.toppingName === "Pepperoni") {
        return 10;
    } else if (this.toppingName === "Mushrooms") {
        return 40;
    } else if (this.toppingName === "Onions") {
        return 15;
    } else if (this.toppingName === "Sausage") {
        return 20;
    } else if (this.toppingName === "Bacon") {
        return 30;
    } else if (this.toppingName === "Extra-cheese") {
        return 10;
    } else if (this.toppingName === "Black-olives") {
        return 15;
    } else if (this.toppingName === "Green-peppers") {
        return 5;
    } else {
        alert("Please choose topping(s) of your choice");
    }
}






$(document).ready(function() {
    $("#checkout").click(function() {
        event.preventDefault();
        // alert("Akii fanya tuu!");

    var sizeInput = $("#size").val();

    var pizzaSize = new size(sizeInput);
        pizzaSize.priceSize();
        alert(pizzaSize.priceSize());

    var crustInput = $("#crust").val();
    
    var crustSize = new crust(crustInput);
        crustSize.crustPrice();
        alert(crustSize.crustPrice());


    var toppingInput = $("#toppings").val();

    var toppingSize = new topping(toppingInput);
        toppingSize.toppingPrice();
        alert(toppingSize.toppingPrice());
    });
})


