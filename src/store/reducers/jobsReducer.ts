import { JobsState, Action } from '../../types'
const initialState = {
  jobs: [],
}

const dummyJob = {
  id: '1',
  created_at: 'string',
  type: 'string',
  title: 'just testing',
  description: 'string',
  company: 'string',
  company_logo: 'string',
  company_url: 'string',
  location: 'string',
  url: 'string',
  how_to_apply: 'string',
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