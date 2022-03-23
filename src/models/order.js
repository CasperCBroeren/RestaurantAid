export class Order {
	constructor(beverage, meal) {
		this.beverage = beverage;
		this.meal = meal;
		this.orderedAt = new Date();
	}

	get cost() {
		return this.beverage.price.add(this.meal.price);
	}
}
