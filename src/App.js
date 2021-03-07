import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Header } from "./components/header";
import styles from "./App.module.css";
import { router } from "./router";

const App = () => {
    const getRoutes = () => {
        let result = [];

        router.forEach(route => {
            result.push(<Route key={`route-${route.name}`} exact path={route.path} component={route.component} />);
        });

        return result;
    }

    return (
        <Router>
            <div>
                <Header routes={router} />
                <div className={styles.main}>
                    <Switch>
                        {getRoutes()}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export { App };
