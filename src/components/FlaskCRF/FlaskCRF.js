import React from 'react';
import './FlaskCRF.scss';
import { Container } from '@mui/material';
import FlaskSection from '../FlaskSection/FlaskSection';
import useTranslate from '../../hooks/useTranslate';
import FormControls from '../FormControls/FormControls';
import {useFormik} from 'formik';
import useForm from '../../hooks/useForm';

const FlaskCRF = crf => {
    const {fieldLocal} = useTranslate();
    const {name, description, sections, layout_type, layout_columns} = crf;
    const options = useForm(crf);
    const formik = useFormik({ ...options, enableReinitialize: true});
    const layout = {layout_type, layout_columns};

    return (
        <div className="FlaskCRF">
            <Container>
                <h2>{fieldLocal(name)}</h2>
                <h3>{fieldLocal(description)}</h3>
            </Container>

            <form onSubmit={formik.handleSubmit}>
                {sections.map(section => {
                    return <FlaskSection { ...section} { ...layout} key={section.id} formik={formik}/>
                })}
                <div>Errors: {formik.errors && <span>{JSON.stringify(formik.errors)}</span>}</div>
            </form>
            <FormControls formik={formik}/>
        </div>
    )
}

export default FlaskCRF;
