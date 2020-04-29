import React from "react";
import moment from "moment";

const WorkOrderSummary = (props) => (
     <div className="order-highlights">
          <div className="highlight">
               <div className="icon"><i className="fal fa-award"></i></div>
               <div className="value">{props.workOrder && props.workOrder.status}</div>
               <div className="label">Status</div>
          </div>
          <div className="highlight">
               <div className="icon"><i className="fal fa-clock"></i></div>
               <div className="value">{props.workOrder && props.workOrder.extra_time}</div>
               <div className="label">Use Extra Resources</div>
          </div>
          <div className="highlight">
               <div className="icon"><i className="fal fa-box-full"></i></div>
               <div className="value">{props.workOrder && moment(props.workOrder.created_date).format("L")}</div>
               <div className="label">Submitted On</div>
          </div>
          <div className="highlight">
               <div className="icon"><i className="fal fa-gift"></i></div>
               <div className="value">{props.workOrder && moment(props.workOrder.estimated_delivery_date).format("L")}</div>
               <div className="label">Estimated Delivery</div>
          </div>
          <div className="highlight">
               <div className="icon"><i className="fal fa-user"></i></div>
               <div className="value">{props.workOrder && props.workOrder.submitted_by}</div>
               <div className="label">Submitted By</div>
          </div>
     </div>
);

export default WorkOrderSummary;