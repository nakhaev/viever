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

export default function Viewer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {linkData, currentCrf, currentIndex} = useSelector(state => state.viewer);
    const {languages, queryParams: { displayHeader, displayFooter, displayInfoHeader }} = useSelector(state => state.app);
    const location = useLocation();

    useEffect(() => {
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
        <BaseLayout Header={ displayHeader === 'true' ? Header : null } Footer={ displayFooter === 'true' ? Footer : null }>
            {linkData && languages && currentCrf
                ? <>
                    {displayInfoHeader === 'true' && <InfoString { ...linkData} currentIndex={currentIndex}/>}
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
