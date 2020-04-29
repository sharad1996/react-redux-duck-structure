import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getWorkOrders } from "../../actions";
import WorkOrderListItem from "./WorkOrderListItem";

class WorkOrderList extends React.Component {

    componentDidMount() {
        this.props.getWorkOrders();
    }

    render() {
        const { workOrders } = this.props;

        return (
            <>
                <Helmet><title>Run My Business | Work Orders</title></Helmet>
                <div className="page-content">
                    <div className="work-order-list">

                        <div className="page-header d-flex justify-content-between align-items-center">
                            <h1>Work Orders</h1>
                            <Link to="/work-order/new"><i className="fal fa-plus-circle" aria-hidden="true"></i> New
                                Order</Link>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered table-grid-wrapper">
                                <thead>
                                    <tr className="table-grid headings">
                                        <th className="priority sort-down">Priority</th>
                                        <th className="extra-time"><i className="fal fa-clock"></i></th>
                                        <th className="name sortable">Name</th>
                                        <th className="status sortable">Status</th>
                                        <th className="submitted-on sortable">Submitted On</th>
                                        <th className="delivery sortable">Est. Delivery</th>
                                        <th className="controls">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workOrders.length > 0 && workOrders.map((workOrder, index) =>
                                        <WorkOrderListItem key={`work-order-${index}`} index={index} {...workOrder} />
                                    )}
                                    <tr className="table-grid">
                                        <td colSpan="7" className="text-center archive">You have 219 Achived Work Orders. <a href="/">View them
                                    now.</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

const mapStateToProps = ({ workOrders }) => ({
    workOrders: workOrders.data
})

const mapDispatchToProps = dispatch => ({
    getWorkOrders: () => dispatch(getWorkOrders()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkOrderList);
