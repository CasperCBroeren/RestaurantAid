export class Price {
	constructor(value) {
		this.value = value;
	}

	get formatted() {
		return `€ ${this.value.toFixed(2)}`;
	}

	add(other) {
		return new Price(this.value + other.value);
	}
}
