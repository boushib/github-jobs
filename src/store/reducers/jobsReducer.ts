import { JobsState, Action } from '../../types'
const initialState = {
  jobs: [],
}

const jobsReducer = (state: JobsState = initialState, action: { type: Action, payload: any }) => {
  switch (action.type) {
    case Action.FETCH_JOBS:
      return { ...state, jobs: action.payload }
    default:
      return state
  }
}

export default jobsReducer