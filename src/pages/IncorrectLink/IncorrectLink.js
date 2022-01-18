import React from 'react';
import './IncorrectLink.scss';
import BaseLayout from '../../components/BaseLayout';
import {Grid, Button} from '@mui/material';
import {useHistory} from 'react-router-dom';
import useTranslate from '../../Hooks/useTranslate';

export default function IncorrectLink() {
    const {translate} = useTranslate();
    const history = useHistory();

    const styles = {
        wrapper: {
            background: '#d7e2f2',
            minHeight: '100vh',
            color: '#3e8aa4',
            flexGrow: 1,
            padding: '0 20px'
        },
        item: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            justifyContent: 'end'
        },
        label: {
            fontSize: '32px',
            maxWidth: '500px',
            margin: "0 auto",
            padding: "20px 0"
        },
        description: {
            fontSize: '24px',
            maxWidth: '500px',
            margin: "0 auto",
            padding: "20px 0"
        },
        image: {
            margin: "0 auto"
        },
        actions: {
            textAlign: 'center',
            paddingTop: '50px'
        }
    }

    return (
        <BaseLayout Header={null} Footer={null}>
            <Grid container style={styles.wrapper}>
                <Grid item xs={12} md={6} style={styles.item}>
                    <h1 style={styles.label}>{ translate('UNAUTHORIZED$YOU_NEED_AUTHORIZE') }</h1>
                    <h3 style={styles.description}>{ translate('UNAUTHORIZED$UNAUTHORIZED_DESCRIPTION') }</h3>
                </Grid>
                <Grid item xs={12} md={6} style={styles.item}>
                    <img alt="home" width="200px" style={styles.image} src="/flask_white_icon.svg" id="flask-icon"/>
                </Grid>
                <Grid item xs={12} style={styles.actions}>
                    <Button variant="contained" color="success" onClick={() => history.goBack()}>
                        { translate('UNAUTHORIZED$BTN_AUTHORIZE') }
                    </Button>
                </Grid>
            </Grid>
        </BaseLayout>
    )
}
