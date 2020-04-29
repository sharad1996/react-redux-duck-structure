import axios from "axios";
import config from "../../../core/config";
import {
    GET_WORK_ORDER_BEGIN,
    GET_WORK_ORDER_SUCCESS,
    GET_WORK_ORDER_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getWorkOrder(id) {
    return function (dispatch) {
        dispatch({ type: GET_WORK_ORDER_BEGIN });
        axios.get(`${baseURL}/api/workorder/${id}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_WORK_ORDER_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get work order error", error);
                dispatch({
                    type: GET_WORK_ORDER_FAILURE,
                    payload: error
                });
            });
    };
}