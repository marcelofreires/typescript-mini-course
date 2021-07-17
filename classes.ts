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

class CharAccout extends UserAccount {
  nickname: string
  level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname
    this.level = level
  }
}

const marcelo = new UserAccount('Marcelo', 30)

console.log(marcelo)
console.log(marcelo.age)
marcelo.logDetails()

const freires = new CharAccout('Freire', 31, 'freires', 99)
console.log(freires)
freires.logDetails()
