import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './App.scss';
import {useEffect, useState} from 'react';
import {Switch, Route, Redirect, useLocation, useHistory} from 'react-router-dom';
import {authorization, setCurrentLink, setLanguage, setQueryParams} from './appSlice';

import Viewer from './pages/Viewer/Viewer';
import Log from './pages/Log'
import IncorrectLink from './pages/IncorrectLink/IncorrectLink';
import {useDispatch, useSelector} from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import qs from 'qs';
import _ from 'lodash';

const test = {
    mode: 'edit',
    crfIndex: 0,
    lang: 'en',
    languageSync: true,
    autoClose: false,
    displayInfoHeader: true,
    hideBackButton: false,
    hideHeader: false,
    hideFooter: false,
    callbackURL: 'http://local-app.flaskdata.io',
    authToken: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxYzJlcjhYaGFwRktJRGpLQ1kwSzhUZ3o0VWtJZFE2cyIsImV4cCI6MTY0MjAwMzE1OTQ5NiwiaWF0IjoxNjQxOTgxNTU5fQ.xT5eyHpN0g5bgn854H7ILyoC-0QrFhaogRSsDDdJHhnyXcorVuong_2lkA9LXLFq',
}

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

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const {direction, languages, queryParams, queryParams: { lang, authToken }} = useSelector(state => state.app);
    const [classes, setClasses] = useState(['App']);

    useEffect( () => {
        // checking of the user agent and adding the additional classes for IE11
        const ua = window.navigator.userAgent;
        setClasses(prev => {
            let newclasses = [ ...prev];
            newclasses = newclasses.filter(item => item !== 'ie');
            if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
                newclasses.push('ie');
            }
            return newclasses;
        })
    }, []);

    useEffect(() => {
        dispatch(setCurrentLink(location));
    }, []);

    useEffect(() => {
        /**
         * list of query params
         *
         * mode - ['edit', 'display'] 'edit' - allow edit form data, 'display' - readonly mode
         * crfIndex - the index of the current CRF in the event
         * lang - language
         * languageSync - flag to turn on/off the synchronization of the language changing
         * autoClose - flag to automatically close each CRF when saving
         * displayInfoHeader - flag to turn on/off the displaying of the info string
         * hideBackButton - flag to hide the 'Back' button
         * hideHeader - flag to hide/show header
         * hideFooter - flag to hide/show footer
         * callbackURL - callback URL
         * authToken - JWT token for the user authorization
         *
         */
        const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(setQueryParams(queryParams));
    }, [location]);

    useEffect(() => {
        if(lang) {
            let exist = _.find(languages, item => item.languagekey === lang);
            if(exist) dispatch(setLanguage(lang));
        }
    }, [languages, lang]);

    useEffect(() => {
        const path = location.pathname;
        const query = { ...queryParams };

        dispatch(authorization(authToken));
        if(query.authToken && query.authToken !== '') {
            delete query.authToken;
            history.push({
                pathname: path,
                search: qs.stringify(query)
            });
        }
    },[authToken]);

    useEffect(() => {
        setClasses(prev => {
            let newclasses = [ ...prev];
            newclasses = newclasses.filter(item => item !== 'direction-rtl');
            if(direction === 'rtl') newclasses.push('direction-rtl');
            return newclasses;
        })
    },[direction]);

    return (
        <div className={classes.join(' ')}>
            <Switch>
                {/*<Route path={'/'} exact component={IncorrectLink} />*/}

                <Route path={'/'} exact> <Redirect to={'/FED_MMef0nmotoaZ?'+qs.stringify(test)} /> </Route>

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
