import React from 'react';

import BaseLayout from '../components/BaseLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LoremIpsum from '../components/LoremIpsum';
import SignupForm from '../components/SignupForm';


export default function Log() {
    return (
        <BaseLayout Header={Header} Footer={Footer}>
            <LoremIpsum fontSize={16}/>
            <SignupForm />
        </BaseLayout>
    )
}
