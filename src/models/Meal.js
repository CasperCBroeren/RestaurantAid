import { Price } from "./Price";


export class Meal {
    constructor(name, price, image, description) {
        this.name = name;
        this.price = new Price(price);
        this.image = image;
        this.description = description;
    }
}
