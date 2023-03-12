import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  JobListing: undefined;
  JobDetail: {jobId: string; screenTitle: string | undefined};
};

export type JobListingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'JobListing'
>;

export type JobDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'JobDetail'
>;
export type JobDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'JobDetail'
>;
