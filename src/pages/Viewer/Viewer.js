import React, {useEffect} from 'react';

import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import InfoString from '../../components/InfoString/InfoString';
import FlaskCRF from '../../components/FlaskCRF/FlaskCRF';
import {getLinkData, setCurrentCrf, setCurrentIndex} from './viewerSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Viewer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {linkData, currentCrf, currentIndex} = useSelector(state => state.viewer)

    // http://localhost:3000/kwthZZrCyseV?mode=edit
    // http://localhost:3000/FED_MMef0nmotoaZ?mode=edit

    useEffect(() => {
        if(history.location && history.location.pathname && history.location.pathname !== '') {
            dispatch(getLinkData(history.location.pathname));
        } else {
            history.push('/IncorrectLink')
        }
    }, []);

    useEffect(() => {
        dispatch(setCurrentCrf(currentIndex));
    }, [linkData, currentIndex]);

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
            {linkData&&<InfoString { ...linkData} currentIndex={currentIndex}/>}
            {currentCrf&&<FlaskCRF { ...currentCrf}/>}
            <div style={{textAlign: 'center'}}>
                <button onClick={previousCrf}>Back</button>
                <button onClick={nextCrf}>Next</button>
            </div>
        </BaseLayout>
    )
}
