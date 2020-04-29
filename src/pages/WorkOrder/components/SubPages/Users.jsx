import React from 'react';
import { Helmet } from "react-helmet";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";

export const Users = () => (
    <>
        <Helmet><title>Run My Business | Files</title></Helmet>
        <WorkOrderHeader />
        <div className="work-order">

            <div className="order-wrapper">
                <WorkOrderNavigation />
                <div className="order-content">

                    <div className="order-header">
                        <h2>Work Order Settings</h2>
                        <button><i className="fal fa-user-plus"></i> Add User</button>
                    </div>

                    <div className="order-users">

                        <div className="new-user">
                            <h4>Add a User</h4>
                            <form>
                                <div className="form-set">
                                    <label htmlFor="#">Email Address <span className="required-marker">*</span></label>
                                    <input type="text" />
                                </div>
                                <button>Submit Comment</button>
                            </form>
                        </div>

                        <div className="table-grid-wrapper">

                            <div className="table-grid headings">
                                <div className="name">Name</div>
                                <div className="author">Role</div>
                                <div className="controls">&nbsp;</div>
                            </div>

                            <div className="table-grid">
                                <div className="name">Johnathan Crowe</div>
                                <div className="author">Client (Order Owner)</div>
                                <div className="controls">
                                    <div className="controls">
                                        <div className="table-control trash">Remove User</div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="name">Johnathan Crowe</div>
                                <div className="author">Client</div>
                                <div className="controls">
                                    <div className="controls">
                                        <div className="table-control trash">Remove User</div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="name">Johnathan Crowe</div>
                                <div className="author">Client</div>
                                <div className="controls">
                                    <div className="controls">
                                        <div className="table-control trash">Remove User</div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-grid internal">
                                <div className="name">Johnathan Crowe</div>
                                <div className="author">Manager</div>
                                <div className="controls">
                                    <div className="controls">
                                        <div className="table-control trash">Remove User</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    </>
);

export default Users;