import React from 'react';

import BaseLayout from '../components/BaseLayout';
import Footer from '../components/Footer/Footer';


export default function IncorrectLink() {
    return (
        <BaseLayout Header={null} Footer={Footer}>
            <h1 style={{textAlign: 'center'}}>Incorrect link</h1>
        </BaseLayout>
    )
}
