import {useQuery} from '@apollo/client';
import {ACTIVE_JOBS_QUERY} from '../graphql/queries';

const useActiveJobs = (limit: Number, page: Number) => {
  const {loading, error, data} = useQuery(ACTIVE_JOBS_QUERY, {
    variables: {limit, page},
  });

  return {loading, error, data};
};

export default useActiveJobs;
