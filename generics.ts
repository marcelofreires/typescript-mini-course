function useState() {
  let state: number

  function getState() {
    return state
  }

  function setState(newState: number) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState(123)
console.log(newState.getState())
