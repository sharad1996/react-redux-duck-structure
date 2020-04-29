import React from 'react';
import './style.scss';

const WorkOrderInformation = () => (
    <div className="work-order-information col-12 col-md-3">
        <form>
            <h2>Details</h2>
            <div className="form-set">
                <label htmlFor="#">Work Order Name <span className="required-marker">*</span></label>
                <input type="text" />
                <div className="accessory-text error">This is a problem!</div>
            </div>

            <div className="form-set">
                <label htmlFor="#">Extra Resources</label>
                <div className="option-array">
                    <div className="option-pair">
                        <input type="checkbox" id="extraResources" />
                        <label htmlFor="extraResources">Add Extra Resources If Available</label>
                    </div>
                </div>
            </div>

            <div className="form-set">
                <label htmlFor="#">Estimated Delivery</label>
                <input type="text" readOnly value="March 3, 2020" />
            </div>

        </form>
        <input type="submit" name="" value="Submit" />
    </div>
);

export default WorkOrderInformation;

