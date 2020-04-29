import * as constants from "../constants";

const getWorkOrderDiscussionBegin = (state) => ({
    ...state,
    discussionsLoading: true,
});

const getWorkOrderDiscussionSuccess = (state, action) => ({
    ...state,
    discussions: action.payload,
    discussionsLoading: false,
});

const getWorkOrderDiscussionFailure = (state, action) => ({
    ...state,
    errors: action.payload,
    discussionsLoading: true,
});

export const getWorkOrderDiscussionHandlers = {
    [constants.GET_WORK_ORDER_DISCUSSION_BEGIN]: getWorkOrderDiscussionBegin,
    [constants.GET_WORK_ORDER_DISCUSSION_SUCCESS]: getWorkOrderDiscussionSuccess,
    [constants.GET_WORK_ORDER_DISCUSSION_FAILURE]: getWorkOrderDiscussionFailure,
};
