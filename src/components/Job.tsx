import { JobModel } from '../models/Job'
import './Job.scss'

type Props = {
  job: JobModel
}

const Job = ({ job }: Props) => {
  const { title } = job
  return (
    <div className="job">
      <h1>{title}</h1>
    </div>
  )
}

export default Job
