import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Viewer from './pages/Viewer';
import Log from './pages/Log'
import IncorrectLink from './pages/IncorrectLink';

function App() {
    let styles = ['App']

    // checking of the user agent and adding the additional styles for IE11
    const ua = window.navigator.userAgent;
    if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        styles.push('ie')
    }

    return (
        <div className={styles.join(' ')}>
            <Switch>
                <Route path={'/'} exact component={Viewer} />
                <Route path={'/log'} exact component={Log} />
                <Route component={IncorrectLink} />
            </Switch>
        </div>
    );
}

export default App;
