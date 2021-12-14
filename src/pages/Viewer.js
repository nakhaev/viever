import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import BaseLayout from '../components/BaseLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import InfoString from '../components/InfoString/InfoString';
import FlaskCRF from '../components/FlaskCRF/FlaskCRF';
import {getEventData} from '../services/api.service';

export default function Viewer(props) {
    const {location, history} = props;
    // http://localhost:3000/FED_okLhmYb4SWkS?mode=edit&callbackURL=http%3A%2F%2Flocal-app.flaskdata.io%2Fsubjects%2Fflask-events%2F1708932%3Fcrf%3D617c1506f10a915296f2c0fbAE5A1FA6F1&token=eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUaEhSZjRIRnF1TXlHMFI2QjBPb1I1TnZTblhxclZoZiIsImV4cCI6MTYzNjEzNzI2MTM4NCwiaWF0IjoxNjM2MTE1NjYxfQ.1ZyR8QuDlwAcy7M7tPnuFa8hcaVW4udpvM0L_Efey81aIPSKcJP4OjiNU7CIs0No

    const [data, setData] = useState(null);
    const [currentCrf, setCurrentCrf] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(location && location.pathname && location.pathname !== '') {
            getEventData(location.pathname)
                .then(success => {
                    setData(success);
                })
                .catch(error => {
                    console.log('getEventData error: ', error);
                    history.push('/');
                });
        }
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
