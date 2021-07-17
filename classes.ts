class UserAccount {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The user ${this.name} is ${this.age} years old`)
  }
}

const marcelo = new UserAccount('Marcelo', 30)

console.log(marcelo)
console.log(marcelo.age)
marcelo.logDetails()
