export type NullableString = string | null;
export type NullableNumber = number | null;
export type Status = string;

export interface BaseResponse<Data> {
  result: Data;
  result_code: Status;
  details: NullableString;
}
