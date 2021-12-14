import React from 'react';
import './FlaskCard.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const FlaskCard = (props) => {
    const {data} = props;
    return (
        <Card variant="outlined" className="flaskCard">
            <CardActions> actions </CardActions>
            <CardContent>
                {JSON.stringify(data, null, 2)}
            </CardContent>
        </Card>
    )
}

export default FlaskCard;
