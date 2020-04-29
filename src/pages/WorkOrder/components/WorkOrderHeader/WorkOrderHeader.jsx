import React from 'react';
import WorkOrderSummary from "../WorkOrderSummary";

const WorkOrderHeader = (props) => (
    <div className="page-header d-flex justify-content-between align-items-center">
        <div className="row">
            <div className="col-12">
                <h1>Order Name</h1>
            </div>
            <div className="col-12">
                <button disabled><i className="fal fa-archive"></i> Archive Order</button>
            </div>
            <div className="col-12">
                <WorkOrderSummary workOrder={props.workOrder} />
            </div>
        </div>
    </div>
);

export default WorkOrderHeader;
