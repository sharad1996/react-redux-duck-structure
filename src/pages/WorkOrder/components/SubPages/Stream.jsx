import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getWorkOrder, getWorkOrderStreams } from "../../actions";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";
import moment from "moment";

const Stream = (props) => {
  const id = props.match.params.id;
  const { streams, workOrder } = props;

  useEffect(() => {
    props.getWorkOrder(id);
    props.getWorkOrderStreams(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Run My Business | Stream</title>
      </Helmet>
      <WorkOrderHeader workOrder={workOrder} />
      <div className="work-order">
        <div className="order-wrapper">
          <WorkOrderNavigation id={id} />
          <div className="order-content">
            <div className="order-header">
              <h2>Work Order Stream</h2>
            </div>

            <div className="order-stream">
              {streams.length > 0 && streams.map((stream, streamIndex) => {
                return (
                  <div key={`stream-list-${streamIndex}`} className="row event internal">
                    <div className="col-12 col-md-1">
                      <div className="event-node" />
                    </div>
                    <div className="col-12 col-md-11 event-content">
                      <div className="date">{moment(stream.date).format("L")}</div>
                      <div className="synopsis">
                        Comment posted by <a href="/">{stream.Info2}</a>.
                      </div>
                      <div className="details">
                        <div className="label">Comment</div>
                        <div className="value">{stream.Info1}</div>
                      </div>
                      {stream.Info4 &&
                        <div className="files">
                          <div className="label">Files</div>
                          <ul>
                            {JSON.parse(stream.Info4).map((info, index) => (
                              <li key={`stream-file-list-${index}`}>
                                <a href={`/file/getfile/${info.id}`} className="file png">
                                  {info.name}
                                </a>
                                <span className="file-size">(95 kb)</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      }
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ workOrders }, ownProps) => ({
  workOrder: workOrders.data.find(
    (item) => item.id === parseInt(ownProps.match.params.id)
  ),
  streams: workOrders.streams,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkOrder: (id) => dispatch(getWorkOrder(id)),
  getWorkOrderStreams: (id) => dispatch(getWorkOrderStreams(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stream));
