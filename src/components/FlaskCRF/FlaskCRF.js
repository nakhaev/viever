import React from 'react';
import './FlaskCRF.scss';
import { Container } from '@mui/material';
import FlaskSection from '../FlaskSection/FlaskSection';
import { fieldLocal } from '../../services/translate.service';

const FlaskCRF = props => {
    const {name, description, sections} = props;
    return (
        <div className="FlaskCRF">
            <Container>
                <h2>{fieldLocal(name)}</h2>
                <h3>{fieldLocal(description)}</h3>
            </Container>
            {sections.map(section => {
                return <FlaskSection { ...section} key={section.id}/>
            })}
        </div>
    )
}

export default FlaskCRF;
