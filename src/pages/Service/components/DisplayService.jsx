import React from 'react';
import DisplayExpandedService from "./DisplayExpandedService";

class DisplayService extends React.Component {
    state = {
        services: [],
        options: [],
        isExpanded: this.props.expanded,
    };

    render() {
        const { isExpanded } = this.state;
        return (
            <>
                <tr className="table-grid expanded">
                    <td className="type">Site Plan</td>
                    <td className="quantity">5</td>
                    <td className="time">10:00</td>
                    <td className="controls">
                        <div className="table-control remove"><i className="fal fa-trash-alt"></i></div>
                        {!isExpanded &&
                            <div className="table-control expand" onClick={() => { this.setState({ isExpanded: true }) }}>
                                <i className="fal fa-plus-square" />
                            </div>
                        }
                        {isExpanded &&
                            <div className="table-control collapse" onClick={() => { this.setState({ isExpanded: false }) }} >
                                <i className="fal fa-minus-square" />
                            </div>
                        }
                    </td>
                </tr>
                {isExpanded &&
                    <tr className="bg-white table-grid">
                        <td colSpan="4"><DisplayExpandedService expanded={this.state.isExpanded} /></td>
                    </tr>
                }
            </>
        )
    }
};

export default DisplayService;