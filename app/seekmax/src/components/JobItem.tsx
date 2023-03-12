import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Job} from '../model/job.model';
import ColorTheme from '../theme/color.theme';
import TextTheme from '../theme/text.theme';

type JobItemProp = {job: Job; onJobItemClick: (jobId: string) => void};

function JobItem({job, onJobItemClick}: JobItemProp): JSX.Element {
  return (
    <View style={styles.jobItemCard}>
      <TouchableOpacity onPress={() => onJobItemClick(job._id)}>
        <View style={styles.jobItemTitleSection}>
          <Text style={styles.jobItemTitle}>{job.positionTitle}</Text>
          {job.haveIApplied ? <JobItemAppliedIndicator /> : null}
        </View>
        <Text style={styles.jobItemDesc}>{job.description}</Text>
      </TouchableOpacity>
    </View>
  );
}

function JobItemAppliedIndicator(): JSX.Element {
  return (
    <View style={styles.appliedIndicatorCard}>
      <Text style={styles.appliedIndicatorText}>Applied</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  jobItemCard: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: ColorTheme.cardBackground,
  },
  jobItemTitleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobItemTitle: {
    marginBottom: 12,
    fontSize: TextTheme.headline7.fontSize,
    fontWeight: 'bold',
    color: ColorTheme.textPrimary,
  },
  jobItemDesc: {
    fontSize: TextTheme.body2.fontSize,
    color: ColorTheme.textPrimary,
  },
  appliedIndicatorCard: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: ColorTheme.backgroundBrand,
  },
  appliedIndicatorText: {
    fontSize: TextTheme.small.fontSize,
    color: ColorTheme.textReversed,
  },
});

export default JobItem;
