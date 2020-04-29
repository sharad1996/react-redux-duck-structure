import axios from "axios";
import config from "../../../core/config";
import {
    GET_SERVICES_BEGIN,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getServices() {
    return function (dispatch) {
        dispatch({ type: GET_SERVICES_BEGIN });
        axios.get(`${baseURL}/api/services`)
            .then(({ data }) => {
                dispatch({
                    type: GET_SERVICES_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                console.log("get services error", error);
                dispatch({
                    type: GET_SERVICES_FAILURE,
                    payload: error
                });
            });
    };
}