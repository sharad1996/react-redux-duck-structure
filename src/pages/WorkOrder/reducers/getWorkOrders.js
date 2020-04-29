import * as constants from "../constants";

const getWorkOrdersBegin = (state) => ({
    ...state,
    workOrdersLoading: true,
});

const getWorkOrdersSuccess = (state, action) => ({
    ...state,
    data: action.payload,
    workOrdersLoading: false,
});

const getWorkOrdersFailure = (state, action) => ({
    ...state,
    errors: action.payload,
    workOrdersLoading: true,
});

export const getWorkOrdersHandlers = {
    [constants.GET_WORK_ORDERS_BEGIN]: getWorkOrdersBegin,
    [constants.GET_WORK_ORDERS_SUCCESS]: getWorkOrdersSuccess,
    [constants.GET_WORK_ORDERS_FAILURE]: getWorkOrdersFailure,
};
