import * as constants from "../constants";

const getWorkOrderStreamBegin = (state) => ({
  ...state,
  streamsLoading: true,
});

const getWorkOrderStreamSuccess = (state, action) => ({
  ...state,
  streams: action.payload,
  streamsLoading: false,
});

const getWorkOrderStreamFailure = (state, action) => ({
  ...state,
  errors: action.payload,
  streamsLoading: true,
});

export const getWorkOrderStreamHandlers = {
  [constants.GET_WORK_ORDER_STREAM_BEGIN]: getWorkOrderStreamBegin,
  [constants.GET_WORK_ORDER_STREAM_SUCCESS]: getWorkOrderStreamSuccess,
  [constants.GET_WORK_ORDER_STREAM_FAILURE]: getWorkOrderStreamFailure,
};
