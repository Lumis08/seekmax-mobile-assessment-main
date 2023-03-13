import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import JobItem from '../components/JobItem';
import useActiveJobs from '../hooks/useActiveJobs';
import {JobListingScreenNavigationProp} from '../navigation/types.navigation';

function JobListingScreen() {
  const navigation = useNavigation<JobListingScreenNavigationProp>();
  const {loadMore, jobData} = useActiveJobs();

  // Click handling for navigate to Job Detail Screen
  const onJobItemClick = (id: string, jobTitle: string) => {
    navigation.navigate('JobDetail', {
      jobId: id,
      screenTitle: jobTitle,
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
        ItemSeparatorComponent={JobListingSeperator}
        onEndReached={() => loadMore()}
      />
    </SafeAreaView>
  );
}

function JobListingSeperator() {
  return <View style={{height: 10}} />;
}

const styles = StyleSheet.create({
  jobListingScreen: {
    flex: 1,
    padding: 16,
  },
});

export default JobListingScreen;
