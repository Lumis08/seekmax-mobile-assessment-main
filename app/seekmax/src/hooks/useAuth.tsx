import {useMutation} from '@apollo/client';
import {AUTH_MUTATION} from '../graphql/mutations';

const useAuth = () => {
  const [mutateFunction, {data, loading, error}] = useMutation(AUTH_MUTATION);

  // Authenticate with the given username and password
  const authenticate = async (username: string, password: string) => {
    try {
      await mutateFunction({variables: {username, password}});
    } catch (error) {
      console.log(error);
    }
  };

  return {
    authenticate,
    data,
    loading,
    error,
  };
};

export default useAuth;
