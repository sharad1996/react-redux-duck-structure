import { createReducer } from "../../../core/reduxUtils";
import { getWorkOrderHandlers } from "./getWorkOrder";
import { getWorkOrdersHandlers } from "./getWorkOrders";
import { getWorkOrderStreamHandlers } from "./getWorkOrderStreams";
import { getWorkOrderDiscussionHandlers } from "./getWorkOrderDiscussion";
import { getWorkOrderFilesHandlers } from "./getWorkOrderFiles";

const initialState = {
  workOrdersLoading: false,
  data: [],
  errors: [],

  streamsLoading: false,
  streams: [],

  discussionsLoading: false,
  discussions: [],

  filesLoading: false,
  files: []
};

const handlers = {
  ...getWorkOrderHandlers,
  ...getWorkOrdersHandlers,
  ...getWorkOrderStreamHandlers,
  ...getWorkOrderDiscussionHandlers,
  ...getWorkOrderFilesHandlers
};

const workOrdersReducer = createReducer(initialState, handlers);

export default workOrdersReducer;
