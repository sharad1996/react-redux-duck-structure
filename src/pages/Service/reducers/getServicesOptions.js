import * as constants from "../constants";

const getServicesOptionsBegin = (state) => ({
    ...state,
    optionsLoading: true,
});

const getServicesOptionsSuccess = (state, action) => ({
    ...state,
    optionsData: action.payload,
    optionsLoading: false,
});

const getServicesOptionsFailure = (state, action) => ({
    ...state,
    optionsError: action.payload,
    optionsLoading: true,
});

export const getServicesOptionsHandlers = {
    [constants.GET_SERVICES_OPTIONS_BEGIN]: getServicesOptionsBegin,
    [constants.GET_SERVICES_OPTIONS_SUCCESS]: getServicesOptionsSuccess,
    [constants.GET_SERVICES_OPTIONS_FAILURE]: getServicesOptionsFailure,
};
