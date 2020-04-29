import { createReducer } from "../../../core/reduxUtils";
import { getServicesHandlers } from "./getServices";
import { getServicesOptionsHandlers } from "./getServicesOptions";

const initialState = {
    servicesLoading: false,
    servicesData: [],
    servicesError: {},

    optionsLoading: false,
    optionsData: [],
    optionsError: {}
}

const handlers = {
    ...getServicesHandlers,
    ...getServicesOptionsHandlers
}

const serviceReducer = createReducer(initialState, handlers);

export default serviceReducer;
