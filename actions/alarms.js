import { ADD_ALARM, DELETE_ALARM } from "./index";

export const addAlarm = time => {
    return {
        type: ADD_ALARM,
        payload: time,
    };
};

export const deleteAlarm = time => {
    return {
        type: DELETE_ALARM,
        payload: time,
    };
};