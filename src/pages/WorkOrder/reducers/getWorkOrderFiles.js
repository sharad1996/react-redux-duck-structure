import * as constants from "../constants";

const getWorkOrderFilesBegin = (state) => ({
    ...state,
    filesLoading: true,
});

const getWorkOrderFilesSuccess = (state, action) => ({
    ...state,
    files: action.payload,
    filesLoading: false,
});

const getWorkOrderFilesFailure = (state, action) => ({
    ...state,
    errors: action.payload,
    filesLoading: true,
});

export const getWorkOrderFilesHandlers = {
    [constants.GET_WORK_ORDER_FILES_BEGIN]: getWorkOrderFilesBegin,
    [constants.GET_WORK_ORDER_FILES_SUCCESS]: getWorkOrderFilesSuccess,
    [constants.GET_WORK_ORDER_FILES_FAILURE]: getWorkOrderFilesFailure,
};
