import { combineReducers } from 'redux'
import jobsReducer from './reducers/jobsReducer'

const rootReducer = combineReducers({ jobsReducer })

export default rootReducer