import React from 'react';

class DisplayExpandedService extends React.Component {
    state = {
        services: [],
        options: [],
        isExpanded: true,
    };

    render() {

        if (this.props.expanded) {
            return (
                <div className="expanded-content">
                    <h3>Instructions</h3>
                    <div className="row">
                        <div className="standard-instructions col-12 col-md-8">
                            <div className="instruction">
                                <div className="instruction-label">Styles & Standards</div>
                                <div className="instruction-value">Style 1</div>
                            </div>
                            <div className="instruction">
                                <div className="instruction-label">Instructions</div>
                                <div className="instruction-value">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut vulputate tincidunt sagittis. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis elementum, magna ut gravida commodo, felis ligula consectetur
                                velit, eu ullamcorper erat dui nec mi. Donec et odio in nisl accumsan blandit. Proin
                                ullamcorper vel purus at rhoncus.
                            </div>
                            </div>
                            <div className="instruction">
                                <div className="instruction-label">Files</div>
                                <div className="instruction-value">
                                    <ul className="files">
                                        <li><a href="/login" className="file png">site-plan.png</a><span
                                            className="file-size">(95 kb)</span></li>
                                        <li><a href="/login" className="file pdf">sample.pdf</a><span className="file-size">(1.4 mb)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="custom-instructions col-12 col-md-4">
                            <h4>Additional Questions</h4>

                            <div className="instruction">
                                <div className="instruction-label">What should be labeled on the site plan?</div>
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
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
                                        tincidunt sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
    }
};

export default DisplayExpandedService;