export type JobDetail = {
  _id: string;
  description: string;
  haveIApplied: boolean;
  positionTitle: string;
  salaryRange: JobSalaryRange;
};

export type JobSalaryRange = {
  max: number;
  min: number;
};

// Response
export type JobDetailResponse = {
  job: JobDetail;
};
