import React from 'react';
import itemTypes from '../../constants/itemTypes.json';
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';
import SelectComponent from './SelectComponent';

const FormItem = props => {
    const {type} = props;

    switch(type) {
        default: return <InputComponent { ...props } />;
        case itemTypes.INPUT: return <InputComponent { ...props } />;
        case itemTypes.NUMBER: return <InputComponent { ...props } />;
        case itemTypes.RADIO: return <RadioComponent { ...props } />;
        case itemTypes.BIPOLAR_RADIO: return <RadioComponent { ...props } />;
        case itemTypes.SINGLE_SELECT: return <SelectComponent { ...props } />;
    }

}

export default FormItem;