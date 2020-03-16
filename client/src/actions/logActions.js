import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

export const getLogs = () => {
  return async(dispatch) =>{
    setLoading();

  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
