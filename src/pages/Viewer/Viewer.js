import React, {useEffect} from 'react';

import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import InfoString from '../../components/InfoString/InfoString';
import FlaskCRF from '../../components/FlaskCRF/FlaskCRF';
import {setCurrentCrf, setCurrentIndex, getLanguages, getLinkData} from './viewerSlice';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import {useHistory, useLocation} from 'react-router-dom';
import {setCurrentLink, setLanguage} from '../../appSlice';
import qs from 'qs';
import _ from 'lodash';

export default function Viewer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {linkData, currentCrf, currentIndex} = useSelector(state => state.viewer);
    const {languages} = useSelector(state => state.app);
    const location = useLocation();

    useEffect(() => {
        dispatch(setCurrentLink(location));
        dispatch(getLinkData(location.pathname, history));
    }, []);

    useEffect(() => {
        if(linkData && linkData.study_id) {
            dispatch(getLanguages(linkData.study_id));
        }
    }, [linkData]);

    useEffect(() => {
        dispatch(setCurrentCrf(currentIndex));
    }, [linkData, currentIndex]);

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
         *
         */
        const lang = qs.parse(location.search, { ignoreQueryPrefix: true })['lang'];
        if(lang) {
            let exist = _.find(languages, item => item.languagekey === lang);
            if(exist) dispatch(setLanguage(lang));
        }
    }, [location, languages]);

    const nextCrf = () => {
        if(currentIndex + 1 !== linkData.CRFs.length) {
            dispatch(setCurrentIndex(currentIndex + 1));
        }
    }

    const previousCrf = () => {
        if(currentIndex - 1 >= 0) {
            dispatch(setCurrentIndex(currentIndex - 1));
        }
    }

    return (
        <BaseLayout Header={Header} Footer={Footer}>
            {linkData && languages && currentCrf
                ? <>
                    <InfoString { ...linkData} currentIndex={currentIndex}/>
                    <FlaskCRF { ...currentCrf}/>
                    <div style={{textAlign: 'center'}}>
                        <button onClick={previousCrf}>Back</button>
                        <button onClick={nextCrf}>Next</button>
                    </div>
                </>
                : <Preloader />
            }
        </BaseLayout>
    )
}
