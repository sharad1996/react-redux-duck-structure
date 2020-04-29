import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getWorkOrder, getWorkOrderFiles } from "../../actions";
import moment from "moment";

export const Files = (props) => {
    const id = props.match.params.id;
    const { files, workOrder } = props;

    useEffect(() => {
        props.getWorkOrder(id)
        props.getWorkOrderFiles(id);
    }, [])

    return (
        <>
            <Helmet><title>Run My Business | Files</title></Helmet>
            <WorkOrderHeader workOrder={workOrder} />
            <div className="work-order">

                <div className="order-wrapper">
                    <WorkOrderNavigation id={id} />
                    <div className="order-content">
                        <div className="order-header">
                            <h2>Work Order Files</h2>
                        </div>

                        <div className="order-files">

                            <table className="table table-bordered table-grid-wrapper">

                                <thead className="table-grid headings">
                                    <tr>
                                        <td className="name">Name</td>
                                        <td className="author">Uploaded By</td>
                                        <td className="date">Date</td>
                                        <td className="origin">Origin</td>
                                        <td className="service">Service</td>
                                        <td className="controls">&nbsp;</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {files.length > 0 && files.map((file, index) => (
                                        <tr key={`stream-list-${index}`} className="table-grid">
                                            <td className="name">{file.name}</td>
                                            <td className="author">{file.created_by_name}</td>
                                            <td className="date">{moment(file.created_date).format("L")}</td>
                                            <td className="origin">{file.comment_id ? "Comment" : "Order Creation"}</td>
                                            <td className="service"></td>
                                            <td className="controls">
                                                <div className="controls">
                                                    <a href={`/file/getfile/${file.id}`} className="table-control download">Download</a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


const mapStateToProps = ({ workOrders }, ownProps) => ({
    workOrder: workOrders.data.find(
        (item) => item.id === parseInt(ownProps.match.params.id)
    ),
    files: workOrders.files
});

const mapDispatchToProps = dispatch => ({
    getWorkOrder: (id) => dispatch(getWorkOrder(id)),
    getWorkOrderFiles: id => dispatch(getWorkOrderFiles(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Files));