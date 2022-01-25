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
import qs from 'qs';

export default function Viewer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const {linkData, currentCrf, currentIndex} = useSelector(state => state.viewer);
    const {languages, queryParams, queryParams: { hideHeader, hideFooter, displayInfoHeader, crfIndex }} = useSelector(state => state.app);

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


    useEffect(() => {
        let index = 0;

        try {
            index = Number(crfIndex);
        } catch(error) {
            console.log(error);
        }

        if(linkData && linkData.CRFs && index >= 0 && index < linkData.CRFs.length ) {
            dispatch(setCurrentIndex(index));
            history.replace({search: qs.stringify({ ...queryParams, crfIndex: String(index)})});
        }

    }, [crfIndex, linkData]);

    return (
        <BaseLayout Header={ hideHeader === 'true' ? null : Header } Footer={ hideFooter === 'true' ? null : Footer}>
            {linkData && languages && currentCrf
                ? <>
                    {displayInfoHeader === 'true' && <InfoString { ...linkData} currentIndex={currentIndex}/>}
                    <FlaskCRF { ...currentCrf} />
                </>
                : <Preloader />
            }
        </BaseLayout>
    )
}
