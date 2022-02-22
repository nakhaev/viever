import React from 'react';
import FormControl from '@mui/material/FormControl';
import useTranslate from '../../hooks/useTranslate';
import {Select, MenuItem, InputLabel, NativeSelect} from '@mui/material';

const SelectComponent = props => {
    let { options, defaultValue, value } = props;
    const {fieldLocal} = useTranslate();

    const [_value, setValue] = React.useState('');

    const handleChange = (event) => {
        value = [_value];
        setValue(event.target.value);
    };

    const createControls = () => {
        if(!options) return null;
        return options.map((option, index) => <option key={index} value={option.value}>{fieldLocal(option.title)}</option>);
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                </InputLabel>
                <NativeSelect
                    defaultValue={defaultValue[0]}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    {createControls()}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default SelectComponent;