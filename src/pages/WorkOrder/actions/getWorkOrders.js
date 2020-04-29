import axios from "axios";
import config from "../../../core/config";
import {
    GET_WORK_ORDERS_BEGIN,
    GET_WORK_ORDERS_SUCCESS,
    GET_WORK_ORDERS_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getWorkOrders() {
    return function (dispatch) {
        dispatch({ type: GET_WORK_ORDERS_BEGIN });
        axios.get(`${baseURL}/api/workorder/open`)
            .then(({ data }) => {
                dispatch({
                    type: GET_WORK_ORDERS_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get work orders error", error);
                dispatch({
                    type: GET_WORK_ORDERS_FAILURE,
                    payload: error
                });
            });
    };
}