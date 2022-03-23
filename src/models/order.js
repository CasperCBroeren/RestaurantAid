export class Order {
    constructor(beverage, meal)
    {
        this.beverage = beverage;
        this.meal = meal;
        this.orderedAt = new Date();
    }
}

export class Beverage {
    constructor(name, price, image, description)
    {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}


export class Meal {
    constructor(name, price, image, description)
    {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}