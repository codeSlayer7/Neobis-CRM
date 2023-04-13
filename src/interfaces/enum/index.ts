// eslint-disable-next-line import/prefer-default-export
export enum ColumnName {
  WaitCall = 'waitingForCall',
  CallEnded = 'callReceived',
  TrialLesson = 'attendedTrial',
  PassedTrialLesson = 'appliedForTrial',
}

export const CardStatus = {
  WaitCall: 'waitCall',
  CallEnded: 'callEnded',
  TrialLesson: 'trialLesson',
  PassedTrialLesson: 'PassedTrial',
} as const;

export const Endpoints = {
  Applicatins: '/api/v1/applications',
  ApplicationsArchiveWithId: '/api/v1/applications/archive',
  ApplicationsUnArchiveWithId: '/api/v1/applications/unarchive',
  ApplicationsStatusId: '/api/v1/applications/status',
  ApplicationsConvert: '/api/v1/applications/conver',
  ApplicationsSorted: '/api/v1/applications/sort-by-status',
  CourseGetAll: '/api/v1/course',
  CourseCreate: '/api/v1/course',
} as const;

type ApplicationStatusType =
  | 'WAITING_FOR_CALL'
  | 'CALL_RECEIVED'
  | 'APPLIED_FOR_TRIAL'
  | 'ATTENDED_TRIAL'
  | 'APPLIED_FOR_COURSES'
  | 'DID_NOT_APPLY_FOR_COURSES'
  | 'GOT_REJECTED';

type MarketingStrategyType =
  | 'INSTAGRAM'
  | 'SCHOOL_OR_UNIVERSITY'
  | 'WEBSITE'
  | 'TV_RADIO'
  | 'FRIENDS'
  | 'NEWS'
  | 'OTHER';

type KeyValue = {
  [key in MarketingStrategyType]: string;
};

export const marketingOptions: KeyValue = {
  INSTAGRAM: 'Instagram',
  SCHOOL_OR_UNIVERSITY: 'Школа или университет',
  WEBSITE: 'Веб-сайт',
  TV_RADIO: 'ТВ или Радио',
  FRIENDS: 'Друзья',
  NEWS: 'Новости',
  OTHER: 'Фанат Необиса',
};

type StateStatusType = 'ACTIVE' | 'DELETED' | 'ARCHIVED';
type GenderType = 'MALE' | 'FEMALE';
type EducationType = 'SCHOOL' | 'BACHELOR' | 'MASTER' | 'GRADUATED' | 'NONE';

export type {
  ApplicationStatusType,
  MarketingStrategyType,
  StateStatusType,
  GenderType,
  EducationType,
};
