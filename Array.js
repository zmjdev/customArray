function CustArray(...args) {
	let array = {
		elements: { ...arguments },
		length: arguments.length,
		push(_newElement) {
			const newElement = _newElement;
			const label = String(this.length);
			this.length++;
			this.elements[label] = newElement;
		},
		pop() {
			const label = String(this.length);
			const array = [];
			this.elements[label] = undefined;
			this.length--;

			for (let i = 0; i < this.length; i++) {
				let label = String(i);
				array[label] = this.elements[label];
			}
			this.elements = array;
		},
		//TODO remove
		map(func) {
			const array = CustArray();
			for (let i = 0; i < this.length; i++) {
				console.log(this.length);
				let label = String(i);
				array.push(func(this.elements[label]));
			}
			return array;
		},
	};
	return array;
}

let array = new CustArray(1, 2, 3);
const newArray = array.map((element) => element + 1);
console.log(newArray.elements);
