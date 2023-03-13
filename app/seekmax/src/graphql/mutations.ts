import {gql} from '@apollo/client';

export const APPLY_JOB_MUTATION = gql`
  mutation ApplyJobMutation($jobId: String!) {
    apply(jobId: $jobId)
  }
`;

export const AUTH_MUTATION = gql`
  mutation Auth($username: String!, $password: String!) {
    auth(username: $username, password: $password)
  }
`;
