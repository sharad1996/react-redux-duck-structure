import * as constants from "../constants";

const getServicesBegin = (state) => ({
    ...state,
    servicesLoading: true,
});

const getServicesSuccess = (state, action) => ({
    ...state,
    servicesData: action.payload,
    servicesLoading: false,
});

const getServicesFailure = (state, action) => ({
    ...state,
    servicesError: action.payload,
    servicesLoading: true,
});

export const getServicesHandlers = {
    [constants.GET_SERVICES_BEGIN]: getServicesBegin,
    [constants.GET_SERVICES_SUCCESS]: getServicesSuccess,
    [constants.GET_SERVICES_FAILURE]: getServicesFailure,
};
