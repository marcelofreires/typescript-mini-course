class UserAccount {
  public name: string
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
  readonly level: number

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
// freires.level = 100 // Cannot assign to 'level' because it is a read-only property.ts(2540)
console.log(freires.level)
freires.logDetails()
freires.logCharDetails()
