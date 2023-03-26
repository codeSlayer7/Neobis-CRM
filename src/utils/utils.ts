import axios from "axios";

export const isError = function (e: any): e is Error {
    return e && e.stack && e.message;
};

export const getNativeErrorMessage = function (e: any): string {
    return isError(e) ? e.message : "unknown error";
};
export const getApiErrorMessage = (e: any): string => {
    try {
        if (axios.isAxiosError(e)) {
            return e.response?.data?.error || e.message;
        }
        return getNativeErrorMessage(e);
    } catch (error) {
        return "unknown error: " + error
    }
};