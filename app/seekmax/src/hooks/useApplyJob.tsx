import {useMutation} from '@apollo/client';
import {APPLY_JOB_MUTATION} from '../graphql/mutations';

const useApplyJob = () => {
  const [mutateFunction, {data, loading}] = useMutation(APPLY_JOB_MUTATION);

  const applyJob = (jobId: string) => {
    mutateFunction({variables: {jobId}});
  };

  return {
    applyJob,
    applyData: data,
    applyLoading: loading,
  };
};

export default useApplyJob;
