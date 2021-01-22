import Job from '../components/Job'
import { JobModel } from '../models/Job'

type Props = {
  jobs: JobModel[]
}
const Jobs = ({ jobs }: Props) => (
  <div className="jobs">
    <h1>Jobs List</h1>
    {jobs.map(job => (
      <Job job={job} key={job.id} />
    ))}
  </div>
)

export default Jobs
