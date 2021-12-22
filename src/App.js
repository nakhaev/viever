import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './App.scss';
import { useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import { storage } from './services/storage.service';
import {getLanguages, setUser} from './appSlice';

import Viewer from './pages/Viewer/Viewer';
import Log from './pages/Log'
import IncorrectLink from './pages/IncorrectLink';
import { authorization } from './services/auth.service';
import {useDispatch, useSelector} from "react-redux";
import ReduxToastr from 'react-redux-toastr';

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
    const { linkData } = useSelector(state => state.viewer);
    useEffect(() => {
        authorization(history)
            .then(success => {
                storage.set('user', success);
                dispatch(setUser(success));
            })
            .catch(error => {
                storage.remove('user');
                console.log('[Authorization]', error);
            });
    });

    useEffect(() => {
        if(linkData && linkData.study_id) {
            dispatch(getLanguages(linkData.study_id));
        }
    }, [linkData])

    let styles = ['App']

    // checking of the user agent and adding the additional styles for IE11
    const ua = window.navigator.userAgent;
    if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        styles.push('ie')
    }

    return (
        <div className={styles.join(' ')}>
            <Switch>
                <Route path={'/'} exact component={IncorrectLink} />
                <Route path={'/log'} exact component={Log} />
                <Route path={'/:id'} exact component={Viewer} />
                <Route component={IncorrectLink} />
            </Switch>
            <ReduxToastr { ...reduxTostrConfig } getState={(state) => state.toastr} />
        </div>
    );
}

export default App;
