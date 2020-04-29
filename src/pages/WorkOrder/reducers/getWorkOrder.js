import * as constants from "../constants";

const getWorkOrderBegin = (state) => ({
    ...state,
    workOrdersLoading: true,
});

const getWorkOrderSuccess = (state, action) => ({
    ...state,
    data: action.payload,
    workOrdersLoading: false,
});

const getWorkOrderFailure = (state, action) => ({
    ...state,
    errors: action.payload,
    workOrdersLoading: true,
});

export const getWorkOrderHandlers = {
    [constants.GET_WORK_ORDER_BEGIN]: getWorkOrderBegin,
    [constants.GET_WORK_ORDER_SUCCESS]: getWorkOrderSuccess,
    [constants.GET_WORK_ORDER_FAILURE]: getWorkOrderFailure,
};
