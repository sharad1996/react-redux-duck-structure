import React from "react";
import { Link } from "react-router-dom";

const WorkOrderNavigation = (props) => (

    <nav className="order-nav">
        <ul>
            <Link to={`/work-order/${props.id}/stream`}>
                <li className="active">Stream<i className="fal fa-stream"></i></li>
            </Link>
            <Link to={`/work-order/${props.id}/services`}>
                <li>Services<i className="fal fa-list"></i></li>
            </Link>
            <Link to={`/work-order/${props.id}/discussion`}>
                <li>Discussion<i className="fal fa-comments-alt"></i></li>
            </Link>
            <Link to={`/work-order/${props.id}/files`}>
                <li>Files<i className="fal fa-file"></i></li>
            </Link>
            <Link to={`/work-order/${props.id}/users`}>
                <li>Users<i className="fal fa-users"></i></li>
            </Link>
            <Link to="/work-order/settings">
                <li>Settings<i className="fal fa-cogs"></i></li>
            </Link>
        </ul>
    </nav>
);

export default WorkOrderNavigation;