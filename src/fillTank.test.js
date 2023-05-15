'use strict';

describe('fillTank', () => {
  const { fillTank } = require('./fillTank');

  it('should be declared', () => {
    expect(fillTank).toBeInstanceOf(Function);
  });

  it('should fill full tank, if the `amount` is not given', () => {
    const customer = {
      money: 3000, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 2);

    expect(customer.vehicle.fuelRemains).toBe(40);
  });

  it('should fill full tank, if the `amount` is too big', () => {
    const customer = {
      money: 3000, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 2, 100);

    expect(customer.vehicle.fuelRemains).toBe(40);
  });

  it('poor money', () => {
    const customer = {
      money: 30, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 3, 100);

    expect(customer.vehicle.fuelRemains).toBe(18);
  });

  it('amount < 2', () => {
    const customer = {
      money: 30, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 3, 1);

    expect(customer.vehicle.fuelRemains).toBe(8);
  });

  it('amount rounding', () => {
    const customer = {
      money: 300, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 3, 12.844);

    expect(customer.vehicle.fuelRemains).toBe(20.8);
  });

  it('price rounding', () => {
    const customer = {
      money: 300, // customer account balance
      vehicle: {
        maxTankCapacity: 40, // fuel tank volume
        fuelRemains: 8, // Remaining fuel in the tank
      },
    };

    fillTank(customer, 3.76, 12.844);

    expect(customer.money).toBe(251.87);
  });
});
