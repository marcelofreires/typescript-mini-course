class UserAccount {
  public name: string
  protected age: number

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

  get getLevel() {
    console.log(`The type of level is ${typeof this.level}`)
    return this.level
  }

  set setNickname(nickname: string) {
    this.nickname = nickname
    console.log(`The new nickname is ${this.nickname}`)
  }

  logCharDetails(): void {
    console.log(`The user ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`)
  }
}

const marcelo = new UserAccount('Marcelo', 30)

console.log(marcelo)
// console.log(marcelo.age) // Property 'age' is protected and only accessible within class 'UserAccount' and its subclasses.ts(2445)
marcelo.logDetails()

const freires = new CharAccout('Freire', 31, 'freires', 99)
// freires.nickname = 'marcelofreires' // Property 'nickname' is private and only accessible within class 'CharAccout'.ts(2341)
console.log(freires)
// freires.level = 100 // Cannot assign to 'level' because it is a read-only property.ts(2540)
console.log(freires.level)
freires.logDetails()
freires.logCharDetails()
console.log(freires.getLevel)
freires.setNickname = 'mfreires'
