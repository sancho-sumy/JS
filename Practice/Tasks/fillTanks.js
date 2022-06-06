class Customer {
    constructor(money, maxTankCapacity, fuelRemains) {
        this.money = money;
        this.vehicle = {
            maxTankCapacity: maxTankCapacity,
            fuelRemains: fuelRemains
        }
    }
}

const newCustomer = new Customer(3000, 40, 8)


console.log(newCustomer);

function fillTank(customer, fuelPrice, amount = (customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains)) {
    if (amount > (customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains)) {
        amount = Math.floor((customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains) * 10) / 10;
    } else {
        amount = Math.floor(amount * 10) / 10;
    }
    if (customer.money > (amount * fuelPrice) && amount > 2) {
        customer.money -= Math.round((amount * fuelPrice) * 100) / 100;
        customer.vehicle.fuelRemains += amount;
    }
}

fillTank(newCustomer, 30.45, 2.1);

console.log(newCustomer)
