import {gql} from '@apollo/client';

export const ACTIVE_JOBS_QUERY = gql`
  query ActiveJobsQuery($limit: Int, $page: Int) {
    active(limit: $limit, page: $page) {
      jobs {
        _id
        description
        positionTitle
        haveIApplied
      }
      hasNext
      page
    }
  }
`;

export const JOB_DETAIL_QUERY = gql`
  query JobDetailQuery($jobId: String!) {
    job(id: $jobId) {
      _id
      description
      haveIApplied
      positionTitle
      salaryRange {
        max
        min
      }
    }
  }
`;
