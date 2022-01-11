import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './App.scss';
import {useEffect, useState} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
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
    languageSync: true,
    autoClose: true,
    authToken: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVSjZMUnVkRzRuYlV3d2pMSHVIenJkZkhNSjNDRUx6eCIsImV4cCI6MTY0MTkzNDYyMTY2MiwiaWF0IjoxNjQxOTEzMDIxfQ.b6N4TTU4qb6USbkoctKDyHKUPl7OB22jAlc8SgE-3GXhqnBL7jS8PQzGgqJpD0QR',
    displayInfoHeader: true,
    hideBackButton: false,
    callbackURL: 'http://local-app.flaskdata.io',
    displayHeader: true,
    displayFooter: true
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

// test links
// http://localhost:3000/kwthZZrCyseV?mode=edit
// http://localhost:3000/FED_MMef0nmotoaZ?mode=edit

function App() {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const location = useLocation();
    const {direction, languages} = useSelector(state => state.app);
    const [classes, setClasses] = useState(['App']);

    useEffect( () => {
        // checking of the user agent and adding the additional classes for IE11
        const ua = window.navigator.userAgent;
        if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
            setClasses(prev => {
                let newclasses = [ ...prev];
                newclasses.push('ie');
                return newclasses;
            })
        }
    }, []);

    useEffect(() => {
        dispatch(setCurrentLink(location));
    }, []);

    useEffect(() => {
        /**
         * list of query params
         *
         * crfIndex - the index of the current CRF in the event
         * languageSync - flag to turn on/off the synchronization of the language changing
         * autoClose - flag to automatically close each CRF when saving
         * authToken - JWT token for the user authorization
         * displayInfoHeader - flag to turn on/off the displaying of the info string
         * mode - ['edit', 'display'] 'edit' - allow edit form data, 'display' - readonly mode
         * hideBackButton - flag to hide the 'Back' button
         * callbackURL - callback URL
         * lang - language
         * hideHeader - flag to hide/show header
         * hideFooter - flag to hide/show footer
         *
         */
        const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(setQueryParams(queryParams));
        const lang = qs.parse(location.search, { ignoreQueryPrefix: true })['lang'];
        if(lang) {
            let exist = _.find(languages, item => item.languagekey === lang);
            if(exist) dispatch(setLanguage(lang));
        }
    }, [location, languages]);

    useEffect(() => {
        const token = qs.parse(search, { ignoreQueryPrefix: true })['authToken'];
        dispatch(authorization(token));
    },[]);

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
