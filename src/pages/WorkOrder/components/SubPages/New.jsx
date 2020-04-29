import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WorkOrderInformation from "../WorkOrderInformation";
import AddService from "../../../Service/components/AddService"
import DisplayService from "../../../Service/components/DisplayService";

class New extends React.Component {
    render() {
        return (
            <>
                <Helmet><title>Run My Business | New Work Order</title> </Helmet>
                <div className="page-header d-flex justify-content-between align-items-center">
                    <h1>New Work Order</h1>
                    <Link to="/work-order/list"><i className="fal fa-plus-circle" aria-hidden="true"></i> Cancel Order</Link>
                </div>
                <div className="work-order-new row">
                    <WorkOrderInformation />

                    <div className="requested-services col-12 col-md-9">
                        <h2>Requested Services</h2>

                        <div className="table-responsive">
                            <table className="table table-bordered table-grid-wrapper">

                                <thead className="table-grid headings">
                                    <tr>
                                        <th className="type">Type</th>
                                        <th className="quantity">Quantity</th>
                                        <th className="time">Estimated Time</th>
                                        <th className="controls">&nbsp;</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={false} />
                                    <DisplayService expanded={true} />

                                    <tr className="table-grid">
                                        <td colSpan="4" className="add-service">Add Another Service</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <AddService />
                    </div>
                </div>
            </>
        )
    }
};

export default New;
