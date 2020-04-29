import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
// import { ReactComponent as Logo } from '../../assets/rmb-logo.png';
import './style.scss';

const Header = ({ currentUser }) => {
    const signOut = () => {
        localStorage.removeItem("access_token");
        auth.signOut();
    }

    return (
        <nav className="secondary-nav d-flex justify-content-between align-items-center">
            <div className="breadcrumbs">
                <ul>
                    <li>Work Orders</li>
                    <li>New Work Order</li>
                </ul>
            </div>
            <div className="settings">
                <ul>
                    <li><Link to={'/login'}><div className='option' onClick={signOut}><i className="fal fa-sign-out"></i></div></Link></li>
                    <li><i className="fal fa-cogs"></i></li>
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
