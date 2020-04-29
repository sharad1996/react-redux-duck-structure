import React from 'react';
import { withRouter } from "react-router-dom";
import "./style.scss"

const HpMenuItem = ({ title, subtitle, history, match }) => (
    <div
        className='hp-menu-item'
        onClick={() => history.push(`${match.url}${title}`)}
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
);

export default withRouter(HpMenuItem);