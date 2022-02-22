import React from 'react';
import {TextField} from '@mui/material';
import useTranslate from '../../hooks/useTranslate';

const InputComponent = props => {
    const { formik } = props;
    const {fieldLocal} = useTranslate();

    return (
        <TextField
            style={{width: '100%'}}
            id={props.name}
            name={props.name}
            label={fieldLocal(props.label)}
            type={props.type.toLowerCase()}
            onChange={formik.handleChange}
            value={formik.values[props.name]}
            disabled={props.adds.disabled}
            placeholder={props.placeholder}
            variant="standard"
        />
    )
}

export default InputComponent