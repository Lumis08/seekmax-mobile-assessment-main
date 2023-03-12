import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {ACTIVE_JOBS_QUERY} from '../graphql/queries';
import {ActiveJobsResponse, JobUiData} from '../model/job.model';

const ACTIVE_JOBS_LIMIT = 10;

const useActiveJobs = () => {
  const {fetchMore, data} = useQuery(ACTIVE_JOBS_QUERY, {
    variables: {limit: ACTIVE_JOBS_LIMIT, page: 1},
  });
  const [jobData, setJobData] = useState<JobUiData>({
    jobs: [],
    hasNext: false,
    page: 1,
  });

  useEffect(() => {
    if (!data) return;

    updateJobData(data);
  }, [data]);

  // Handle pagination loading
  const loadMore = async () => {
    if (!jobData.hasNext) return;

    const resData = await fetchMore({
      variables: {limit: ACTIVE_JOBS_LIMIT, page: jobData.page + 1},
    });

    updateJobData(resData.data);
  };

  // Update JobData state
  const updateJobData = (resData: ActiveJobsResponse) => {
    const newJobData: JobUiData = {
      jobs: [...jobData.jobs, ...resData.active.jobs],
      hasNext: resData.active.hasNext,
      page: resData.active.page,
    };

    setJobData(newJobData);
  };

  return {loadMore, jobData};
};

export default useActiveJobs;
