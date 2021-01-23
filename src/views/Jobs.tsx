import React from 'react'
import api from '../api'
import Job from '../components/Job'
import { JobModel } from '../models/Job'

type State = {
  jobs: JobModel[]
}

class Jobs extends React.Component {
  state: State = {
    jobs: [],
  }

  async componentDidMount() {
    try {
      const { data: jobs } = await api.get('/')
      console.log(jobs)
      this.setState({ jobs })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="jobs">
        <div className="container">
          <h1>Jobs List</h1>
          {this.state.jobs.length ? this.state.jobs.map(job => <Job job={job} key={job.id} />) : <h2>Loading..</h2>}
        </div>
      </div>
    )
  }
}

export default Jobs
