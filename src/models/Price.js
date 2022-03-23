
export class Price {
    constructor(value) {
        this.value = value;
    }

    get formated() {
        return `€ ${this.value.toFixed(2)}`;
    }

    add(other) {
        return new Price(this.value + other.value);
    }
}
