import React from 'react';
import './FlaskCard.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useTranslate from '../../hooks/useTranslate';
import {TextField} from '@mui/material';

const FlaskCard = (props) => {
    const {data, formik, layoutType} = props;
    const {fieldLocal} = useTranslate();

    const style = {
        boxShadow: layoutType === 1 ? 'none' : '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 1px rgba(0,0,0,0.14),0px 1px 3px 1px rgba(0,0,0,0.2)'
    }

    return (
        <Card className="flaskCard" style={style}>
            <CardActions> actions </CardActions>
            <CardContent>
                <p>{fieldLocal(data.title)}</p>
                <TextField
                    style={{width: '100%'}}
                    id={data.name}
                    name={data.name}
                    label={fieldLocal(data.label)}
                    type={data.type.toLowerCase()}
                    onChange={formik.handleChange}
                    value={formik.values[data.name]}
                    disabled={data.adds.disabled}
                    placeholder={data.placeholder}
                    variant="standard"
                        />
                <span className="help-text">{fieldLocal(data.adds.help)}</span>
                {/*<p>{JSON.stringify(data, null, 2)}</p>*/}
            </CardContent>
        </Card>
    )
}

export default FlaskCard;
