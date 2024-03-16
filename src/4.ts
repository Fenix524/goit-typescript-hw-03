class Key {
	private signature: string

	constructor() {
		this.signature = Math.random().toString(36).substring(2)
	}
	getSignature(): string {
		return this.signature
	}
}
class Person {
	constructor(private key: Key) {}
	getKey(): Key {
		return this.key
	}
}

abstract class House {
	protected door: boolean
	protected key: Key
	protected tenants: Person[] = []

	constructor(key: Key) {
		this.key = key
		this.door = false
	}

	comeIn(person: Person): void {
		if (this.door) {
			this.tenants.push(person)
		}
	}

	abstract openDoor(key: Key): void
}

class MyHouse extends House {
	constructor(key: Key) {
		super(key)
	}

	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true
			console.log('The door is opened.')
		} else {
			console.log('The key does not match.')
		}
	}
}

const key = new Key()
console.log(key.getSignature())

const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())

house.comeIn(person)

// export {}
