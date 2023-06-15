import React, {lazy, Suspense} from 'react';
import Loading from "../../../components/shared-components/Loading";
import {Redirect, Route, Switch} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";

const Index = () => {
    return (
        <div>
            <Suspense fallback={<Loading cover="content"/>}>
                <Switch>
                    <Route path={`${APP_PREFIX_PATH}/clients/list`} component={lazy(() => import(`./listclients`))} />
                    <Route path={`${APP_PREFIX_PATH}/clients/group`} component={lazy(() => import(`./groupclients`))} />
                    <Route path={`${APP_PREFIX_PATH}/clients/edit-profile/:id`} component={lazy(() => import(`./edit-profile`))} />

                    <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/clients`} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Index;