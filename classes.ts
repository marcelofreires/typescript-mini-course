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
  private nickname: string
  level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The user ${this.name} has the char ${this.nickname} at level ${this.level}`)
  }
}

const marcelo = new UserAccount('Marcelo', 30)

console.log(marcelo)
console.log(marcelo.age)
marcelo.logDetails()

const freires = new CharAccout('Freire', 31, 'freires', 99)
// freires.nickname = 'marcelofreires' // Property 'nickname' is private and only accessible within class 'CharAccout'.ts(2341)
console.log(freires)
freires.logDetails()
freires.logCharDetails()
