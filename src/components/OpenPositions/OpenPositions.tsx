import { FC } from 'react'
import styles from './OpenPositions.module.scss'
import { JobPosting } from './types'

type OpenPositionsProps = {
  jobPostings: Array<JobPosting>
}

const OpenPositions: FC<OpenPositionsProps> = ({ jobPostings }) => (
  <div className={styles.wrapper}>
    <h2>&#128187; Open Positions</h2>

    <div className={styles.jobs_list}>
      {jobPostings?.map((job) => (
        <a key={job.title} rel="noreferrer" href={job.postingUrl} target='_blank' className={styles.job}>
          <p>{job.title}</p>
        </a>
      ))}
    </div>
  </div>
)

export default OpenPositions