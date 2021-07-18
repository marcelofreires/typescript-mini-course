// S => State
// T => Type
// K => Key
// V => Value
// E => Element

function useState<S extends number | string>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState<string>()

// newState.setState(123) // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(newState.getState())

newState.setState('foo')
console.log(newState.getState())
