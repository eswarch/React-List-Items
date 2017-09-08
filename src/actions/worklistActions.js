import * as types from '../constants/actionTypes/worklist';
import { config } from '../config/config';

function worklistSuccess(res) {
  return { type: types.WORKLIST_SUCCESS, res };
}

function currentWorklistSuccess(res) {
  return { type: types.SET_CURRENT_WORKLIST_SUCCESS, res };
}

export function setCurrentWorkList(res) {
  return (dispatch) => {
    dispatch(currentWorklistSuccess(res));
  };
}

export function getWorkListData() {
  return (dispatch) => {
    const response = JSON.parse(config().addedResp);
    dispatch(worklistSuccess(response));
  };
}


