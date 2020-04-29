import React from "react";
import { connect } from "react-redux";
import TextEditor from "../../../sharedComponents/TextEditor";
import { getServices, getServicesOptions } from "../actions";

class AddService extends React.Component {
    state = {
        options: [],
        instruction: {}
    };

    componentDidMount() {
        this.props.getServices();
    }

    fetchServiceOptions = (targetID) => {
        this.props.getServicesOptions(targetID);
    }

    onChange = (value) => {
        this.setState({ instruction: value });
    };

    render() {

        let services = this.props.services;

        let serviceItems = services.map((service) =>
            <option key={service.id} value={service.id}>{service.name}</option>
        );

        let serviceOptions = this.state.options;
        let optionItems = serviceOptions = serviceOptions.map((option) =>
            <option key={option.id} value={option.id}>{option.name}</option>
        );
        return (
            <div className="service-form">

                <h3>Add a Service</h3>

                <form>
                    <div className="row">
                        <div className="standard-fields pr-5 col-12 col-md-9">
                            <div className="form-set">
                                <label htmlFor="#">Service Type <span className="required-marker">*</span></label>
                                <select id="sr" onChange={(e) => { this.fetchServiceOptions(e.target.value) }}>
                                    {serviceItems}
                                </select>

                            </div>
                            <div className="form-set">
                                <label htmlFor="#">Quantity <span className="required-marker">*</span></label>
                                <input type="text" />
                            </div>
                            <div className="form-set">
                                <label htmlFor="#">Standard / Style <span className="required-marker">*</span></label>
                                <select>
                                    {optionItems}
                                </select>
                            </div>
                            <div className="form-set">
                                <label htmlFor="#">Instructions <span className="required-marker">*</span></label>
                                <TextEditor
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-set">
                                <label htmlFor="#">Files <span className="required-marker">*</span></label>
                                <div className="dropzone">Dropzone</div>
                            </div>
                        </div>

                        <div className="custom-fields col-12 col-md-3">
                            <h4>Additional Questions</h4>

                            <div className="form-set">
                                <label htmlFor="#">What should we label? <span
                                    className="required-marker">*</span></label>
                                <div className="radcheck-wrapper">
                                    <input type="checkbox" />
                                    <label>Major Roads</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="checkbox" />
                                    <label>Major Tenants</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="checkbox" />
                                    <label>Local Tenants</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="checkbox" />
                                    <label>Schools</label>
                                </div>
                            </div>

                            <div className="form-set">
                                <label htmlFor="#">What should we label? <span
                                    className="required-marker">*</span></label>
                                <div className="radcheck-wrapper">
                                    <input type="radio" />
                                    <label>Major Roads</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="radio" />
                                    <label>Major Tenants</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="radio" />
                                    <label>Local Tenants</label>
                                </div>
                                <div className="radcheck-wrapper">
                                    <input type="radio" />
                                    <label>Schools</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="controls col-12">
                            <button>Save Service</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

const mapStateToProps = ({ services }) => ({
    services: services.servicesData
})

const mapDispatchToProps = dispatch => ({
    getServices: () => dispatch(getServices()),
    getServicesOptions: (targetID) => dispatch(getServicesOptions(targetID))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddService);
