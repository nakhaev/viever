import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';
import Viewer from './pages/Viewer';

function App() {
    let styles = ['App']

    // checking of the user agent and adding the additional styles for IE11
    const ua = window.navigator.userAgent;
    if(ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        styles.push('ie')
    }

    return (
        <div className={styles.join(' ')}>
            <Viewer/>
        </div>
    );
}

export default App;
