import React from 'react';
import { connect } from 'react-redux';
import LoginPage from "./pages/User/components/Login";
import Aux from "./sharedComponents/Aux";
import Routes from "./pages/routes";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './pages/User/actions';
import './App.css';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
                localStorage.setItem("access_token", userAuth.xa);
                localStorage.setItem("access_email", userAuth.email);
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        let code = <LoginPage />;
        if (this.props.currentUser) {
            code = <Routes />;
        }
        return (
            <Aux>
                {code}
            </Aux>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);