import {Link} from 'react-router-dom'
import {BsStar} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {FaSuitcaseRolling} from 'react-icons/fa'

import './index.css'

const Jobcard = props => {
  const {each} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = each
  return (
    <Link to={`/jobs/${id}`}>
      <li className="job-card-container">
        <div className="logo-container">
          <img alt="job details company logo" src={companyLogoUrl} />
          <div className="job-rating-container">
            <div>
              <h1>{title}</h1>
            </div>
            <div className="rating-container">
              <p>
                <BsStar />
              </p>
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-job-description">
          <p>{location}</p>
          <GoLocation />
          <p>{employmentType}</p>
          <FaSuitcaseRolling />
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default Jobcard
