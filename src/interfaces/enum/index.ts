// eslint-disable-next-line import/prefer-default-export
export enum ColumnName {
  WaitCall = 'WAITING_FOR_CALL',
  CallEnded = 'CALL_RECEIVED',
  TrialLesson = 'APPLIED_FOR_TRIAL',
  PassedTrialLesson = 'ATTENDED_TRIAL',
}

export const extraCardStatus = {
  WaitCall: 'WAITING_FOR_CALL',
  CallEnded: 'CALL_RECEIVED',
  TrialLesson: 'APPLIED_FOR_TRIAL',
  PassedTrialLesson: 'ATTENDED_TRIAL',
} as const;
export const CardStatus = {
  WaitCall: 'waitingForCall',
  CallEnded: 'callReceived',
  TrialLesson: 'appliedForTrial',
  PassedTrialLesson: 'attendedTrial',
} as const;

export const Endpoints = {
  Applicatins: '/api/v1/applications',
  ApplicationsArchiveWithId: '/api/v1/applications/archive',
  ApplicationsUnArchiveWithId: '/api/v1/applications/unarchive',
  ApplicationsStatusId: '/api/v1/applications/status',
  ApplicationsConvert: '/api/v1/applications/conver',
  ApplicationsSorted: '/api/v1/applications/sort-by-status',
  CourseAPI: '/api/v1/courses',
  CourseCreate: '/api/v1/courses/save-image',
  MentorsGetAll: '/api/v1/mentors/cards',
  MentorAPI: '/api/v1/mentors',
  MentorCreate: '/api/v1/mentors/save-image',
  MentorUpdate: '/api/v1/mentors/update',
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

type KeyValue<T> = {
  [key in T]: string;
};

export const marketingOptions: KeyValue<MarketingStrategyType> = {
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

export const eductionOption: KeyValue<EducationType> = {
  BACHELOR: 'Бакалавриат',
  SCHOOL: 'Школа',
  MASTER: 'Магистратура',
  GRADUATED: 'Выпускник',
  NONE: 'Ничего',
};

export const hasLaptopOption = {
  hasLaptopText: 'Нету',
};
export type {
  ApplicationStatusType,
  MarketingStrategyType,
  StateStatusType,
  GenderType,
  EducationType,
};
