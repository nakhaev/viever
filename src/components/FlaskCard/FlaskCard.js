import React from 'react';
import './FlaskCard.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

const FlaskCard = (props) => {
    const {data} = props;
    return (
        <Card variant="outlined" className="flaskCard">
            <CardActions> actions </CardActions>
            <CardContent>
                <TextField id="standard-basic" label="Standard" variant="standard" value={data.test} />
            </CardContent>
        </Card>
    )
}

export default FlaskCard;
