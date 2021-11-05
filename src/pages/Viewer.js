import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import BaseLayout from '../components/BaseLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import mockData from '../mocks/eventmockdata.json';
import InfoString from '../components/InfoString/InfoString';
import FlaskCRF from '../components/FlaskCRF/FlaskCRF';


export default function Viewer() {
    const [data, setData] = useState(null);
    const [currentCrf, setCurrentCrf] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setData(mockData);
    }, []);

    useEffect(() => {
        if(data) {
            data.CRFs = _.sortBy(data.CRFs, ['order']);
            setCurrentCrf(data.CRFs[currentIndex]);
        }
    }, [data, currentIndex]);

    const nextCrf = () => {
        if(currentIndex + 1 !== data.CRFs.length) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const previousCrf = () => {
        if(currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <BaseLayout Header={Header} Footer={Footer}>
            {data&&<InfoString { ...data} currentIndex={currentIndex}/>}
            {currentCrf&&<FlaskCRF { ...currentCrf}/>}
            <div style={{textAlign: 'center'}}>
                <button onClick={previousCrf}>Back</button>
                <button onClick={nextCrf}>Next</button>
            </div>
        </BaseLayout>
    )
}
