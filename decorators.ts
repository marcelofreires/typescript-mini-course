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
// Method decorator
// Parameter decorator
// Acessor decorator
