import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../sharedComponents/Header"
import Aux from "../sharedComponents/Aux";
import Navigation from "./Navigation/components/Navigation";
import MessageComponent from "../sharedComponents/Message";
import WorkOrderList from "./WorkOrder/components/WorkOrderList";
import New from "./WorkOrder/components/SubPages/New";
import Stream from "./WorkOrder/components/SubPages/Stream";
import Services from "./WorkOrder/components/SubPages/Services";
import Discussion from "./WorkOrder/components/SubPages/Discussion";
import Files from "./WorkOrder/components/SubPages/Files";
import Users from "./WorkOrder/components/SubPages/Users";
import Settings from "./WorkOrder/components/SubPages/Settings";
import './pages.scss'

class Routes extends React.Component {
    render() {

        return (
            <Aux>
                <Navigation />
                <div className="page-content-wrapper">
                    <Header />
                    <div className="page-content">

                        <MessageComponent message="Oh no! Something horrible has happened." typeOfMessage="error" />
                        <MessageComponent message="Here's some information for you." typeOfMessage="info" />
                        <MessageComponent message="Everything is awesome" typeOfMessage="success" />
                        <Switch>
                            <Route exact path='/work-order/new' render={() => <New />} />
                            <Route exact path='/work-order/list' render={() => <WorkOrderList />} />
                            <Route exact path='/work-order/:id' render={() => <Stream />} />
                            <Route exact path='/work-order/:id/services' render={() => <Services />} />
                            <Route exact path='/work-order/:id/discussion' render={() => <Discussion />} />
                            {/* <Route path='/work-order/:id/discussion' exact component={Discussion} /> */}
                            <Route exact path='/work-order/:id/files' render={() => <Files />} />
                            <Route exact path='/work-order/users' render={() => <Users />} />
                            <Route exact path='/work-order/settings' render={() => <Settings />} />
                            <Redirect from="/login" to="work-order/list" />
                        </Switch>

                    </div>
                </div>
            </Aux>
        );
    }
};

export default Routes;