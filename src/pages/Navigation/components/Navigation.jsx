import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../../assets/rmb-logo.svg';
import '../style.scss';

const Navigation = ({ currentUser }) => (
    <nav className="main-nav">
        <div className="logo"><Logo /></div>
        <ul>
            <li><Link to="/work-order/list"><span>Dashboard</span><i className="fal fa-tachometer-alt-slow"></i></Link></li>
            <li><Link to="/work-orders"><span>Work Orders</span><i className="fal fa-clipboard-list-check"></i></Link></li>
            <li><Link to="/team"><span>Team</span><i className="fal fa-users"></i></Link></li>
            <li><Link to="/calendar"><span>Calendar</span><i className="fal fa-calendar-alt"></i></Link></li>
        </ul>
    </nav>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navigation);