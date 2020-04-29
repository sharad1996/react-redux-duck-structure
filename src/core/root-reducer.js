import { combineReducers } from "redux";
import userReducer from "../pages/User/reducers";
import serviceReducer from "../pages/Service/reducers";
import workOrdersReducer from "../pages/WorkOrder/reducers";

export default combineReducers({
   user: userReducer,
   services: serviceReducer,
   workOrders: workOrdersReducer
});
