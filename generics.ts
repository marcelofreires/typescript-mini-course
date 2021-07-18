function useState() {
  let state: number | string

  function getState() {
    return state
  }

  function setState(newState: number | string) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState(123)
console.log(newState.getState())

newState.setState('foo')
console.log(newState.getState())
