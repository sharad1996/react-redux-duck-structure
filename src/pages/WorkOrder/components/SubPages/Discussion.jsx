import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";
import WorkOrderDiscussionStream from "../WorkOrderDiscussionStream"
import { withRouter } from "react-router-dom";
import { getWorkOrder, getWorkOrderDiscussion } from "../../actions";

const Discussion = (props) => {
    const id = props.match.params.id;
    const { discussions, workOrder } = props;

    useEffect(() => {
        props.getWorkOrder(id);
        props.getWorkOrderDiscussion(id);
    }, [id])

    return (
        <>
            <Helmet><title>Run My Business | Discussion</title></Helmet>
            <WorkOrderHeader workOrder={workOrder} />
            <div className="work-order">

                <div className="order-wrapper">
                    <WorkOrderNavigation id={id} />
                    <div className="order-content">

                        <div className="order-header">
                            <h2>Work Order Discussion</h2>
                            <button><i className="fal fa-comment-alt-plus"></i> New Comment</button>
                        </div>

                        <div className="order-discussion">

                            <div className="comment">
                                <h4>New Comment</h4>
                                <form>
                                    <div className="form-set">
                                        <label htmlFor="#">Type</label>
                                        <select>
                                            <option selected>Comment</option>
                                            <option>Submit for Client Approval</option>
                                        </select>
                                    </div>
                                    <div className="form-set">
                                        <label htmlFor="#">Related Task <span
                                            className="required-marker">*</span></label>
                                        <select>
                                            <option>Site Plan</option>
                                            <option>Floor Plan</option>
                                            <option>Offering Memorandum</option>
                                        </select>
                                    </div>
                                    <div className="form-set">
                                        <label htmlFor="#">Comment <span className="required-marker">*</span></label>
                                        <textarea></textarea>
                                    </div>
                                    <div className="form-set">
                                        <label htmlFor="#">Files <span className="required-marker">*</span></label>
                                        <div className="dropzone">Dropzone</div>
                                    </div>
                                    <button>Submit Comment</button>
                                </form>
                            </div>

                            {discussions.length > 0 && discussions.map((discussion, index) =>
                                <WorkOrderDiscussionStream
                                    index={index}
                                    key={`discussion-${index}`}
                                    discussion={discussion}
                                />
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

};

const mapStateToProps = ({ workOrders }, ownProps) => ({
    workOrder: workOrders.data.find(
        (item) => item.id === parseInt(ownProps.match.params.id)
    ),
    discussions: workOrders.discussions
});

const mapDispatchToProps = dispatch => ({
    getWorkOrder: id => dispatch(getWorkOrder(id)),
    getWorkOrderDiscussion: id => dispatch(getWorkOrderDiscussion(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Discussion));
