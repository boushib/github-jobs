const redux = require('redux')

const ActionTypes = Object.freeze({
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  ADD_TO_COUNTER: 'ADD_TO_COUNTER',
})
/*
1. Reducer
2. Store
3. subscription
4. Dispatching action
*/
// Reducer
const initialState = {
  counter: 0,
}
const rootReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.INCREMENT_COUNTER) return { ...state, counter: state.counter + 1 }
  if (action.type === ActionTypes.ADD_TO_COUNTER) return { ...state, counter: state.counter + action.value }
  return state
}
// store
const store = redux.createStore(rootReducer)

// subscription
store.subscribe(() => {
  console.log('State update: ', store.getState())
})

// dispatch action
store.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
store.dispatch({ type: ActionTypes.ADD_TO_COUNTER, value: 10 })
