import React from 'react';
import './FlaskCRF.scss';
import { Container } from '@mui/material';
import FlaskSection from '../FlaskSection/FlaskSection';
import { Formik, Form } from 'formik';
import useCRF from '../../Hooks/useCRF';
import useTranslate from '../../Hooks/useTranslate';

const FlaskCRF = crf => {
    const {fieldLocal} = useTranslate();
    const {name, description, sections} = crf;
    const {initialValues, validate} = useCRF(crf);

    const submitHandler = () => {
        console.log('submitted');
    }

    console.log('initialValues', initialValues);

    return (
        <div className="FlaskCRF">
            <Container>
                <h2>{fieldLocal(name)}</h2>
                <h3>{fieldLocal(description)}</h3>
            </Container>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitHandler}
                    >
                {({ isSubmitting }) => (
                    <Form>
                        {sections.map(section => {
                            return <FlaskSection { ...section} key={section.id}/>
                        })}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FlaskCRF;
