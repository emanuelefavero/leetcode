// * Design Parking System

/*
Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
*/

class ParkingSystem {
  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */

  constructor(big, medium, small) {
    this.parking = {
      1: big,
      2: medium,
      3: small,
    }
  }

  /**
   * @param {number} carType
   * @returns {boolean}
   */

  // O(1) time | O(1) space
  addCar(carType) {
    if (this.parking[carType]) {
      this.parking[carType]--
      return true
    }

    return false
  }
}

// -------------------------
// TESTS

const parkingSystem = new ParkingSystem(1, 1, 0)
console.log(parkingSystem.addCar(1)) // true
console.log(parkingSystem.addCar(2)) // true
console.log(parkingSystem.addCar(3)) // false
console.log(parkingSystem.addCar(1)) // false
