import { JobModel } from '../types'
import './Job.scss'

type Props = {
  job: JobModel
  onClick: () => void
}

const Job = ({ job, onClick }: Props) => {
  const { title, created_at, type, location, description, company, company_logo } = job
  const date = new Date(created_at).toLocaleDateString('en-US')
  return (
    <div className="job" onClick={onClick}>
      <div className="header">
        <h3>
          {title} - <span className="company__name">{company}</span>
        </h3>
        {company_logo ? <img className="company__logo" src={company_logo} alt={company} /> : ''}
      </div>
      <p className="date">{date}</p>
      <div className="tag">{type}</div>
      <p>Location: {location}</p>
      <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
      <button className="btn">View Details</button>
    </div>
  )
}

export default Job
