export type JobModel = {
  id: string,
  created_at: string,
  type: string,
  title: string,
  description: string,
  company: string,
  company_logo: string,
  company_url: string,
  location: string,
  url: string,
  how_to_apply: string,
}

export interface JobsState {
  jobs: JobModel[]
}

export interface GlobalState {
  jobsReducer: JobsState
}

export enum Action {
  FETCH_JOBS
}