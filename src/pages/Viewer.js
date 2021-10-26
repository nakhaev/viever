import React from 'react';

import BaseLayout from '../components/BaseLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import LoremIpsum from '../components/LoremIpsum';
import ResponsiveItem from '../components/ResponsiveItem/ResponsiveItem';
import ViewerWrapper from '../components/ViewerWrapper/ViewerWrapper';
import FlaskCard from '../components/FlaskCard/FlaskCard';


export default function Viewer() {
    let test = [1,2,3,4,5,6];
    return (
        <BaseLayout Header={Header} Footer={Footer}>
            {/*<LoremIpsum fontSize={16}/>*/}
            <ViewerWrapper spacing={2} mode="container">
            {test.map(item => {
                return (
                    <ResponsiveItem layoutType={0} columns={5} key={item}>
                        <FlaskCard data={{test: 'Flask Card test'}} />
                    </ResponsiveItem>
                )
            })}
            </ViewerWrapper>
        </BaseLayout>
    )
}
