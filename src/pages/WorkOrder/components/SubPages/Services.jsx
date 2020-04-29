import React from 'react';
import { Helmet } from "react-helmet";
import WorkOrderHeader from "../WorkOrderHeader";
import WorkOrderNavigation from "../WorkOrderNavigation";

export const Services = () => (
    <>
        <Helmet><title>Run My Business | Services</title></Helmet>
        <WorkOrderHeader />
        <div className="work-order">

            <div className="order-wrapper">
                <WorkOrderNavigation />
                <div className="order-content">
                    <div className="order-header">
                        <h2>Work Order Services</h2>
                    </div>
                    <div className="order-services">
                        <div className="table-grid-wrapper">
                            <div className="table-grid headings">
                                <div className="type">Type</div>
                                <div className="status">Status</div>
                                <div className="quantity">Quantity</div>
                                <div className="time">Estimated Time</div>
                                <div className="controls">&nbsp;</div>
                            </div>


                            <div className="table-grid">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand"><i className="fal fa-plus-square"></i></div>
                                    <div className="table-control collapse hidden"><i
                                        className="fal fa-minus-square"></i></div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand"><i className="fal fa-plus-square"></i></div>
                                    <div className="table-control collapse hidden"><i
                                        className="fal fa-minus-square"></i></div>
                                </div>
                            </div>

                            <div className="table-grid expanded">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand hidden"><i className="fal fa-plus-square"></i>
                                    </div>
                                    <div className="table-control collapse"><i className="fal fa-minus-square"></i>
                                    </div>
                                </div>
                                <div className="expanded-content">
                                    <h3>Instructions</h3>
                                    <div className="standard-instructions">
                                        <div className="instruction">
                                            <div className="instruction-label">Styles & Standards</div>
                                            <div className="instruction-value">Style 1</div>
                                        </div>
                                        <div className="instruction">
                                            <div className="instruction-label">Instructions</div>
                                            <div className="instruction-value">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Ut vulputate tincidunt sagittis. Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit. Duis elementum, magna ut gravida
                                            commodo, felis ligula consectetur velit, eu ullamcorper erat dui nec mi.
                                            Donec et odio in nisl accumsan blandit. Proin ullamcorper vel purus at
                                            rhoncus.
                                            </div>
                                        </div>
                                        <div className="instruction">
                                            <div className="instruction-label">Files</div>
                                            <div className="instruction-value">
                                                <ul className="files">
                                                    <li><a href="/" className="file png">site-plan.png</a><span
                                                        className="file-size">(95 kb)</span></li>
                                                    <li><a href="/" className="file pdf">sample.pdf</a><span
                                                        className="file-size">(1.4 mb)</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-instructions">
                                        <h4>Additional Questions</h4>

                                        <div className="instruction">
                                            <div className="instruction-label">What should be labeled on the site
                                            plan?
                                            </div>
                                            <div className="instruction-value">
                                                <ul>
                                                    <li>Primary Roads</li>
                                                    <li>Major Retailers</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="instruction">
                                            <div className="instruction-label">Should traffic signals be included?</div>
                                            <div className="instruction-value">
                                                <ul>
                                                    <li>Yes</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="instruction">
                                            <div className="instruction-label">One last question?</div>
                                            <div className="instruction-value">
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                                    vulputate tincidunt sagittis. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand"><i className="fal fa-plus-square"></i></div>
                                    <div className="table-control collapse hidden"><i
                                        className="fal fa-minus-square"></i></div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand"><i className="fal fa-plus-square"></i></div>
                                    <div className="table-control collapse hidden"><i
                                        className="fal fa-minus-square"></i></div>
                                </div>
                            </div>

                            <div className="table-grid">
                                <div className="type">Site Plan</div>
                                <div className="status">In Progress</div>
                                <div className="quantity">5</div>
                                <div className="time">10:00</div>
                                <div className="controls">
                                    <div className="table-control expand"><i className="fal fa-plus-square"></i></div>
                                    <div className="table-control collapse hidden"><i
                                        className="fal fa-minus-square"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Services;