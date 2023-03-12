export type Job = {
  _id: string;
  description: string;
  positionTitle: string;
  haveIApplied: boolean;
};

// Response
export type ActiveJobsResponse = {
  active: {
    jobs: Job[];
    hasNext: boolean;
    page: number;
  };
};

// UI
export type JobUiData = {
  jobs: Job[];
  hasNext: boolean;
  page: number;
};
