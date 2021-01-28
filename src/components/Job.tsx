import { JobModel } from '../types'
import './Job.scss'

type Props = {
  job: JobModel
  onClick: () => void
}

const Job = ({ job, onClick }: Props) => {
  const { title } = job
  return (
    <div className="job" onClick={onClick}>
      <h1>{title}</h1>
    </div>
  )
}

export default Job
