import React from 'react';
import { Helmet } from "react-helmet";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";

export const Settings = () => (
    <>
        <Helmet><title>Run My Business | Files</title></Helmet>
        <WorkOrderHeader />
        <div className="work-order">

            <div className="order-wrapper">
                <WorkOrderNavigation />
                <div className="order-content">

                    <div className="order-header">
                        <h2>Managers</h2>
                    </div>

                    <div className="order-assignments">

                        <div className="assignment">
                            <div className="role"><i className="fal fa-user-crown"></i>Manager</div>
                            <div className="role-select">
                                <select>
                                    <option>Finn Johnson</option>
                                    <option selected>Johnathan Crowe</option>
                                    <option>Jess Palumbo</option>
                                </select>
                            </div>
                            <button>Save</button>
                        </div>

                        <div className="assignment">
                            <div className="role"><i className="fal fa-user-crown"></i>Backup Manager</div>
                            <div className="role-select">
                                <select>
                                    <option disabled>-Select-</option>
                                    <option>Finn Johnson</option>
                                    <option>Johnathan Crowe</option>
                                    <option selected>Jess Palumbo</option>
                                </select>
                            </div>
                            <button disabled>Save</button>
                        </div>

                    </div>

                    <div className="order-header">
                        <h2>Tasks</h2>
                    </div>

                    <div className="order-tasks">

                        <div className="table-grid-wrapper">

                            <div className="table-grid headings">
                                <div className="status sortable">Status</div>
                                <div className="type sort-down">Type</div>
                                <div className="worker sortable">Worker</div>
                                <div className="qa sortable">QC</div>
                                <div className="due sortable">Due Date</div>
                                <div className="controls">&nbsp;</div>
                            </div>

                            <div className="table-grid">
                                <div className="status attention">Unassigned</div>
                                <div className="type">Site Plan</div>
                                <div className="worker">Unassigned</div>
                                <div className="qa">Unassigned</div>
                                <div className="due">04/11/2020</div>
                                <div className="controls">
                                    <div className="table-control view">View Task</div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="status">In Progress</div>
                                <div className="type">Site Plan</div>
                                <div className="worker">Johnathan Crowe</div>
                                <div className="qa">Jess Palumbo</div>
                                <div className="due">04/11/2020</div>
                                <div className="controls">
                                    <div className="table-control view">View Task</div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="status">In Progress</div>
                                <div className="type">Site Plan</div>
                                <div className="worker">Johnathan Crowe</div>
                                <div className="qa">Jess Palumbo</div>
                                <div className="due">04/11/2020</div>
                                <div className="controls">
                                    <div className="table-control view">View Task</div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="status">In Progress</div>
                                <div className="type">Site Plan</div>
                                <div className="worker">Johnathan Crowe</div>
                                <div className="qa">Jess Palumbo</div>
                                <div className="due">04/11/2020</div>
                                <div className="controls">
                                    <div className="table-control view">View Task</div>
                                </div>
                            </div>
                            <div className="table-grid">
                                <div className="status attention">Ready for Review</div>
                                <div className="type">Site Plan</div>
                                <div className="worker">Johnathan Crowe</div>
                                <div className="qa">Jess Palumbo</div>
                                <div className="due">04/11/2020</div>
                                <div className="controls">
                                    <div className="table-control view">View Task</div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    </>
);

export default Settings;
