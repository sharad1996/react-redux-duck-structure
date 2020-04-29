import axios from "axios";
import config from "../../../core/config";
import { GET_WORK_ORDER_FILES_BEGIN, GET_WORK_ORDER_FILES_SUCCESS, GET_WORK_ORDER_FILES_FAILURE } from '../constants'

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getWorkOrderFiles(id) {
    return function (dispatch) {
        dispatch({ type: GET_WORK_ORDER_FILES_BEGIN });
        axios.get(`${baseURL}/api/workorder/${id}/files`)
            .then(({ data }) => {
                dispatch({
                    type: GET_WORK_ORDER_FILES_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get work order files error", error);
                dispatch({
                    type: GET_WORK_ORDER_FILES_FAILURE,
                    payload: error
                });
            });
    };
}