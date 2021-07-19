// @Component
// @Selector
// @useState("qwert")

// Factory
function Logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}`)
  }
}

@Logger('Awesome')
class Foo {}

// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Acessor decorator
