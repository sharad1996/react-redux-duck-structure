import React from "react";
import moment from "moment";

const WorkOrderDiscussionStream = (props) =>
    (
        <div key={`work-order-discussion-${props.index}`} className="comment">
            <div className="flag">Submitted for Your Approval </div>
            <div className="meta">
                Submitted for your approval by <a href="/">{props.Info2}</a> at {moment(props.date).format('LLL')}
            </div>
            <div className="Comment">
                <div className="value">{props.Info1}</div>
            </div>
            {props.Info4 &&
                <div className="files">
                    <div className="label">Files</div>
                    <ul>
                        {JSON.parse(props.Info4).map((info, index) => (
                            <li key={`discussion-file-list-${index}`}>
                                <a href={`/file/getfile/${info.id}`} className="file png">{info.name}</a>
                                <span className="file-size">(95 kb)</span>
                            </li>
                        ))}
                    </ul>
                </div>
            }
            <div className="comment-controls">
                <h4>Order Apporval</h4>
                <form>
                    <div className="form-set">
                        <select>
                            <option selected>Approved</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                    <div className="form-set">
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )


export default WorkOrderDiscussionStream;
