import React from 'react';
import FormControl from '@mui/material/FormControl';
import {Select, MenuItem, InputLabel, Input, Checkbox, ListItemText} from '@mui/material';
import useTranslate from '../../hooks/useTranslate';

const SelectComponent = props => {
    let multiple = false;

    let { options, formik } = props;
    const {fieldLocal} = useTranslate();
    const [value, setValue] = React.useState([]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const createControls = () => {
        if(!options) return null;
        return options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
                {multiple && <Checkbox checked={fieldLocal(option.title) === value} />}
                <ListItemText primary={fieldLocal(option.title)} />
            </MenuItem>
        ));
    }

    const handleChange = (event) => {
        const { target: { value }} = event;
        setValue(value);
    };

    //                    multiple

    return (
        <div>
            <FormControl variant="standard" fullWidth>
                <InputLabel variant="standard" id="demo-multiple-checkbox-label">{fieldLocal(props.label)}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={formik.values[props.name]}
                    onChange={handleChange}
                    input={<Input label={fieldLocal(props.label)} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                        >
                    {createControls()}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectComponent;