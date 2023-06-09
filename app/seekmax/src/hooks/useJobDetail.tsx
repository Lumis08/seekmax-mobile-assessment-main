import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {JOB_DETAIL_QUERY} from '../graphql/queries';
import {JobDetail, JobDetailResponse} from '../model/job-detail.model';

const useJobDetail = (jobId: string) => {
  const {data, loading, error} = useQuery(JOB_DETAIL_QUERY, {
    variables: {jobId},
  });
  const [jobDetail, setJobDetail] = useState<JobDetail>({
    _id: '',
    description: '-',
    haveIApplied: false,
    positionTitle: '-',
    salaryRange: {min: 0, max: 0},
  });

  // Handling the update logic of current job detail's apply status
  const updateJobAppliedStatus = (applied: boolean) => {
    const newJobDetail: JobDetail = {...jobDetail, haveIApplied: applied};
    setJobDetail(newJobDetail);
  };

  // Observe incoming API data and map into the jobDetail state
  useEffect(() => {
    if (!data) return;

    const jobDetailRes: JobDetailResponse = data;
    setJobDetail(jobDetailRes.job);
  }, [data]);

  return {updateJobAppliedStatus, jobDetail, loading, error};
};

export default useJobDetail;
