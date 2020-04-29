import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

const WorkOrderListItem = (props) => (
    <tr className="table-grid">
        {props.locked ?
            <td className="priority locked">Locked</td>
            :
            <td className="priority p-0">
                <div className="priority-set">
                    <div className="priority-number">{props.index + 1}</div>
                    <div className="priority-increase">
                        <i className="fal fa-caret-square-up"></i>
                    </div>
                    <div className="priority-decrease">
                        <i className="fal fa-caret-square-down"></i>
                    </div>
                </div>
            </td>
        }
        {props.preapproval && parseInt(props.preapproval) ?
            <td className="extra-time"><i className="fal fa-check"></i></td>
            :
            <td className="extra-time"><i className="fal fa-plus-circle link"></i></td>
        }
        <td className="name">{props.name}</td>
        <td className="status">{props.status}</td>
        <td className="submitted-on">{moment(props.submitted_on).format('L')}</td>
        <td className="delivery">{moment(props.estimated_delivery_date).format('L')}</td>
        <td className="controls">
            <div className="table-control view" onClick={() => props.history.push(`${props.workorderid}`)}>
                View Order
            </div>
        </td>
    </tr>
);

export default withRouter(WorkOrderListItem);
