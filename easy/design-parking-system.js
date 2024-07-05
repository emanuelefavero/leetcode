class ParkingSystem {
  constructor(big, medium, small) {
    this.parking = {
      1: big,
      2: medium,
      3: small,
    }
  }

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
