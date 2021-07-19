class Person {
    constructor(data) {
        this.data = data;

    }
    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname} `);
    }

    intro() {
        console.log(`Hi, my is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }

    firstChild() {
        const childFirst = this.data.children[0];
        //console.log(this.data.children[0]);
        console.log(`${childFirst.firstname} (${childFirst.age}) `);
    }
    lastChild() {
        //console.log(this.data.children.length);
        const childLast = this.data.children[this.data.children.length - 1];
        console.log(`${childLast.firstname} ${childLast.lastname} (${childLast.age}) `);
    }

    firstCar() {
        const carFirst = this.data.cars[0];
        //console.log(this.data.cars[0]);
        console.log(`${carFirst.brand} ${carFirst.model} (${carFirst.color} )`);
    }

    lastCar() {
        //console.log(this.data.cars.length);
        const carLast = this.data.cars[this.data.cars.length - 1];
        console.log(`${carLast.brand} ${carLast.model} (${carLast.color}) `);
    }

    apartmentPrice() {
        console.log(`${this.data.firstname} has an apartment for ${this.data.address.price} ${this.data.address.currency} `);
    }

    chidren() {
        console.log(`This is a chidren of ${this.data.firstname} ${this.data.lastname}:`);
        for (let i = 0; i < this.data.children.length; i++) {
            const childList = this.data.children[i];
            console.log(`${i + 1}. ${childList.firstname} ${childList.lastname} (${childList.age})`)
        }
    }
    aliveChildren() {
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const childAlive = this.data.children[i];
            if (childAlive.alive === true) {
                count++;
            }
        }
        console.log(`${this.data.firstname} ${this.data.lastname} has only ${count} children alive`);
    }

    autopark() {
        console.log(`This is ${this.data.firstname} cars:`);
        for (let i = 0; i < this.data.cars.length; i++) {
            const carList = this.data.cars[i];
            console.log(`${i + 1}. ${carList.brand} ${carList.model} (${carList.color})`)
        }
    }
    wherePersonLive() {
        console.log(`${this.data.firstname} is living at ${this.data.address.city} ${this.data.address.street} ${this.data.address.houseNumber} `);
    }
    carPrice(index) {
        console.log(`${this.data.cars[index].brand} ${this.data.cars[index].model} is purchased for ${this.data.cars[index].price} ${this.data.cars[index].currency}.`);
    }

    totalSpentForCars() {
        //console.log(this.data.cars[0].price);
        //console.log(this.data.cars.currency);
        let totalCarsCost = 0;
        const cars = this.data.cars;

        for (let car of cars) {
            if (car.currency === 'Litas') {
                totalCarsCost += car.price / 3.45;
            } else {
                totalCarsCost += car.price;
            }
        }
        this.totalCarscost = totalCarsCost;
        //console.log(this.totalCarscost);
        console.log(`${this.data.firstname} has spent ${totalCarsCost.toFixed(2)} Euros for his cars.`);
    }

    totalSpentForApartments() {
        console.log(`${this.data.firstname} has spent ${this.data.address.price} ${this.data.address.currency} for his apartments.`);
    }

    totalSpendings() {
        const totalCost = this.totalCarscost + this.data.address.price;
        //console.log(totalCost);
        console.log(`${this.data.firstname} has spent ${totalCost.toFixed(2)} Euros totally.`);
    }
}

module.exports = Person;