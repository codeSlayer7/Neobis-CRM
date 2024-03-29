export type NullableString = string | null;
export type NullableNumber = number | null;
export type Status = string;

export interface BaseResponse<Data> {
  result: Data;
  resultCode: Status;
  details: NullableString;
}

export type StatusType = "ACTIVE" | "ARCHIVED" | "BLACKLIST" | "FROZEN"
