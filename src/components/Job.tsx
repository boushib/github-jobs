import { JobModel } from '../types'
import './Job.scss'

type Props = {
  job: JobModel
  onClick: () => void
}

const Job = ({ job, onClick }: Props) => {
  const { title, location, description, company } = job
  return (
    <div className="job" onClick={onClick}>
      <h1>
        {title} - {company}
      </h1>
      <p>Location: {location}</p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default Job
