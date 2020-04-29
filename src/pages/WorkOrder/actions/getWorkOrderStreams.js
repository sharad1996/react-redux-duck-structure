import axios from "axios";
import config from "../../../core/config";
import {
    GET_WORK_ORDER_STREAM_BEGIN,
    GET_WORK_ORDER_STREAM_SUCCESS,
    GET_WORK_ORDER_STREAM_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getWorkOrderStreams(id) {
    return function (dispatch) {
        dispatch({ type: GET_WORK_ORDER_STREAM_BEGIN });
        axios.get(`${baseURL}/api/workorder/${id}/stream`)
            .then(({ data }) => {
                dispatch({
                    type: GET_WORK_ORDER_STREAM_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get work order stream error", error);
                dispatch({
                    type: GET_WORK_ORDER_STREAM_FAILURE,
                    payload: error
                });
            });
    };
}