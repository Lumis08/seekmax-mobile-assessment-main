import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {JobDetailScreenRouteProp} from '../navigation/types.navigation';

function JobDetailScreen() {
  const {
    params: {jobId},
  } = useRoute<JobDetailScreenRouteProp>();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Job Detail Screen</Text>
      <Text>Job Id: {jobId}</Text>
    </SafeAreaView>
  );
}

export default JobDetailScreen;
