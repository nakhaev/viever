import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useTranslate from '../../hooks/useTranslate';

const RadioComponent = props => {
    const { options, defaultValue } = props;
    const {fieldLocal} = useTranslate();

    const createControls = () => {
        if(!options) return null;
        return options.map((option, index) => <FormControlLabel key={index} value={option.value} control={<Radio />} label={fieldLocal(option.title)} />);
    }

    return (
        <div>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{fieldLocal(props.label)}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={defaultValue[0]}
                    name="radio-buttons-group"
                >
                    {createControls()}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioComponent;