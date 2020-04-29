import axios from "axios";
import config from "../../../core/config";
import {
    GET_SERVICES_OPTIONS_BEGIN,
    GET_SERVICES_OPTIONS_SUCCESS,
    GET_SERVICES_OPTIONS_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API || config.baseURL

export function getServicesOptions(targetID) {
    return function (dispatch) {
        dispatch({ type: GET_SERVICES_OPTIONS_BEGIN });
        axios.get(`${baseURL}/api/services/${targetID}/options`)
            .then(response => response.json())
            .then(({ data }) => {
                let payload = [];
                if (data.length > 4) {
                    payload = data;
                }
                dispatch({
                    type: GET_SERVICES_OPTIONS_SUCCESS,
                    payload
                });
            })
            .catch((error) => {
                console.log("get services options error", error);
                dispatch({
                    type: GET_SERVICES_OPTIONS_FAILURE,
                    payload: error
                });
            });
    };
}