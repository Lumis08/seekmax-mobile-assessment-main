import {gql} from '@apollo/client';

export const ACTIVE_JOBS_QUERY = gql`
  query ActiveJobsQuery($limit: Int, $page: Int) {
    active(limit: $limit, page: $page) {
      jobs {
        _id
        description
        positionTitle
        haveIApplied
        industry
        location
        salaryRange {
          max
          min
        }
      }
      hasNext
      page
      size
      total
    }
  }
`;
