// @Component
// @Selector
// @useState("qwert")

// Class decorator
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

@setAPIVersion('1.0.0')
class API {}

console.log('API =>', new API())

// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: you can't create ${key} with less than ${length} characters`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}

class Movie {
  @minLength(50)
  title: string

  constructor(title: string) {
    this.title = title
  }
}

const movie = new Movie('Interstellar')
// console.log(movie)

// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function(...args) {
      console.log(`Waiting for ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(greeting: string) {
    this.greeting = greeting
  }

  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}!`)
  }
}

const user = new Greeter('Marcelo')
user.greet()

// Parameter decorator
// Acessor decorator
