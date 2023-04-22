import axios from "axios";

type ArgTypes<T = Record<string, any>> = {
    data: Array<T>
    keys: Array<keyof T>
    value: string
}

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

function isString(item: unknown | string): item is string {
    return typeof item === 'string'
}

export function filterData<T>({ data, keys, value }: ArgTypes<T>) {
    if(!value) return data
    if(!data) return data
    return data.filter(item => {
        return keys.some(key => {
            const currentItem = item[key]
            if (isString(currentItem)) {
                return currentItem.toLowerCase().includes(value)
            }else if(typeof currentItem === 'number') {
                return currentItem === +value
            }
        })
    })
}