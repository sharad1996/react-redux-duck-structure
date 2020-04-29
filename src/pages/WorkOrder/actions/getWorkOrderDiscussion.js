import axios from "axios";
import config from "../../../core/config";
import {
    GET_WORK_ORDER_DISCUSSION_BEGIN,
    GET_WORK_ORDER_DISCUSSION_SUCCESS,
    GET_WORK_ORDER_DISCUSSION_FAILURE
} from '../constants'

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getWorkOrderDiscussion(id) {
    return function (dispatch) {
        dispatch({ type: GET_WORK_ORDER_DISCUSSION_BEGIN });
        axios.get(`${baseURL}/api/workorder/${id}/discussion`)
            .then(({ data }) => {
                dispatch({
                    type: GET_WORK_ORDER_DISCUSSION_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get work order discussion error", error);
                dispatch({
                    type: GET_WORK_ORDER_DISCUSSION_FAILURE,
                    payload: error
                });
            });
    };
}