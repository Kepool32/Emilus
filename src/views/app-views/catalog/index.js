import React, {lazy, Suspense} from 'react'
import Loading from "../../../components/shared-components/Loading";
import {Redirect, Route, Switch} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";

const Catalog = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>

                <Route path={`${APP_PREFIX_PATH}/catalog/product`} component={lazy(() => import(`./products`))} />
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/catalog`} />
            </Switch>
        </Suspense>
    )
}

export default Catalog