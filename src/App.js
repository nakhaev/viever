import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './App.scss';
import { useEffect } from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {authorization} from './appSlice';

import Viewer from './pages/Viewer/Viewer';
import Log from './pages/Log'
import IncorrectLink from './pages/IncorrectLink';
import {useDispatch} from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import qs from 'qs';

const reduxTostrConfig = {
    timeOut: 5000,
    newestOnTop: true,
    preventDuplicates: true,
    position: "top-right",
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    progressBar: true,
    closeOnToastrClick: true
}

// test links
// http://localhost:3000/kwthZZrCyseV?mode=edit
// http://localhost:3000/FED_MMef0nmotoaZ?mode=edit

function App() {
    const { search } = useLocation();
    const dispatch = useDispatch();

    let styles = ['App']

    // checking of the user agent and adding the additional styles for IE11
    const ua = window.navigator.userAgent;
    if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        styles.push('ie');
    }

    useEffect(() => {
        const token = qs.parse(search, { ignoreQueryPrefix: true })['token'];
        dispatch(authorization(token));
    },[]);

    return (
        <div className={styles.join(' ')}>
            <Switch>
                {/*<Route path={'/'} exact component={IncorrectLink} />*/}

                <Route path={'/'} exact>
                    <Redirect to={'/FED_MMef0nmotoaZ?mode=edit'} />
                </Route>

                <Route path={'/incorrect-link'} exact component={IncorrectLink} />
                <Route path={'/log'} exact component={Log} />
                <Route path={'/:id'} exact component={Viewer} />
                <Route component={IncorrectLink} />
            </Switch>
            <ReduxToastr { ...reduxTostrConfig } getState={(state) => state.toastr} />
        </div>
    );
}

export default App;
