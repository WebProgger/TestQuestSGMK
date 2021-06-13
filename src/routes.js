import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {IndexPage} from './pages/index.page';
import {VehiclesPage} from './pages/vehicles.page';

export const useRoutes = isAuth => {
    if(isAuth) {
        return (
            <Switch>
                <Route path="/" exact>
                    <IndexPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <IndexPage />
            </Route>
            <Route path="/vehicles/:id" exact>
                <VehiclesPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}