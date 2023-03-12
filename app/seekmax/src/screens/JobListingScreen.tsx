import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import JobItem from '../components/JobItem';
import useActiveJobs from '../hooks/useActiveJobs';
import {JobListingScreenNavigationProp} from '../navigation/types.navigation';

function JobListingScreen() {
  const navigation = useNavigation<JobListingScreenNavigationProp>();
  const {loadMore, jobData} = useActiveJobs();

  const onJobItemClick = (id: string) => {
    console.log(id);
    navigation.navigate('JobDetail', {
      jobId: id,
      screenTitle: id,
    });
  };

  return (
    <SafeAreaView style={styles.jobListingScreen}>
      <FlatList
        style={{width: '100%', flex: 1}}
        data={jobData.jobs}
        keyExtractor={job => job._id}
        renderItem={({item}) => {
          return <JobItem job={item} onJobItemClick={onJobItemClick} />;
        }}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        onEndReached={() => loadMore()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  jobListingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default JobListingScreen;
