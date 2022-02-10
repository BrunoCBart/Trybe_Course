
const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'NEXT_COLOR': 
    default: return state
  }
}

const store = Redux.createStore(reducer)

store.subscribe(() => {
  console.log('Module 1', store.getState())
})

store.dispatch({type: 'USER_ID', name: 'Jack'})
store.dispatch({type: 'USER_ID', name: 'John'})

console.log(store.getState())
