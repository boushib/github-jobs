import { Dispatch } from 'redux'
import { Action } from '../../types'
import api from '../../api'
import axios from 'axios'

export const fetchJobs = () => async (dispatch: Dispatch) => {
  try {
    const { data: jobs } = await api.get('/')
    console.log(jobs)
    dispatch({ type: Action.FETCH_JOBS, payload: jobs })
  } catch (err) {
    if (axios.isCancel(err)) return
    console.log('Error fetching jobs: ', err)
  }
}