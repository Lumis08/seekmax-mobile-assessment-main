import {gql} from '@apollo/client';

export const APPLY_JOB_MUTATION = gql`
  mutation ApplyJobMutation($jobId: String!) {
    apply(jobId: $jobId)
  }
`;
