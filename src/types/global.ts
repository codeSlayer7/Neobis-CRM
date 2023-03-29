import { Status } from "../constants/global";

export type NullableString = string | null;
export type NullableNumber = number | null;

export interface BaseResponse<Data>{
    result: Data,
    resultCode : Status,
    details : NullableString
}