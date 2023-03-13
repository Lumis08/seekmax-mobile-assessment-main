import React from 'react';
import {SafeAreaView, Text, Button, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {JobDetailScreenRouteProp} from '../navigation/types.navigation';
import useJobDetail from '../hooks/useJobDetail';
import ColorTheme from '../theme/color.theme';
import TextTheme from '../theme/text.theme';

function JobDetailScreen() {
  const {
    params: {jobId},
  } = useRoute<JobDetailScreenRouteProp>();
  const {jobDetail, loading, error} = useJobDetail(jobId);

  return (
    <SafeAreaView style={styles.jobDetailScreen}>
      <View style={styles.jobDetailCard}>
        <Text style={styles.jobDetailTitle}>{jobDetail.positionTitle}</Text>
        <Text style={styles.jobDetailId}>[{jobDetail._id}]</Text>
        <Text style={styles.jobDetailSalaryRange}>
          RM {jobDetail.salaryRange.min} - RM {jobDetail.salaryRange.max}
        </Text>
        <Button
          title={jobDetail.haveIApplied ? 'Applied' : 'Apply'}
          disabled={loading || !!error || jobDetail.haveIApplied}
          color={ColorTheme.button}
          onPress={() => console.log('Apply button pressed!')}
        />
      </View>

      <View style={styles.jobDetailCard}>
        <Text style={styles.jobDetailDescTitle}>DESCRIPTION:</Text>
        <Text style={styles.jobDetailDesc}>{jobDetail.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  jobDetailScreen: {
    flex: 1,
    padding: 16,
  },
  jobDetailCard: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: ColorTheme.cardBackground,
  },
  jobDetailTitle: {
    fontSize: TextTheme.headline6.fontSize,
    fontWeight: 'bold',
    color: ColorTheme.textPrimary,
  },
  jobDetailId: {
    marginBottom: 12,
    fontSize: TextTheme.small.fontSize,
    fontWeight: 'bold',
    color: ColorTheme.textSecondary,
  },
  jobDetailSalaryRange: {
    marginBottom: 12,
    fontSize: TextTheme.body2.fontSize,
    color: ColorTheme.textSecondary,
  },
  jobDetailDescTitle: {
    marginBottom: 12,
    textTransform: 'uppercase',
    fontSize: TextTheme.headline7.fontSize,
    fontWeight: 'bold',
    color: ColorTheme.textSecondary,
  },
  jobDetailDesc: {
    marginBottom: 12,
    fontSize: TextTheme.body2.fontSize,
    color: ColorTheme.textPrimary,
  },
});

export default JobDetailScreen;
