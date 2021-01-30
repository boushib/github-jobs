import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { GlobalState } from '../types'
import { fetchJobs } from '../store/actions/jobsAction'
import Job from '../components/Job'

import './Jobs.scss'

const mapState = (state: GlobalState) => ({ jobs: state.jobsReducer.jobs })

const mapDispatch = { fetchJobs }

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  // custom props goes here
}

class Jobs extends React.Component<Props> {
  async componentDidMount() {
    this.props.fetchJobs()
  }

  handleClick(jobId: string) {
    console.log('job id: ', jobId)
  }

  render() {
    const { jobs } = this.props
    return (
      <div className="jobs page">
        <div className="container">
          <h1>Jobs List</h1>
          {/* <button onClick={fetchJobs}>Fetch jobs</button> */}
          {jobs.length ? (
            jobs.map(job => <Job job={job} onClick={() => this.handleClick(job.id)} key={job.id} />)
          ) : (
            <h2>Loading..</h2>
          )}
        </div>
      </div>
    )
  }
}

export default connector(Jobs)
