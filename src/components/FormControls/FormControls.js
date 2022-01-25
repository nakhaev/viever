import React from 'react';
import './FormControls.scss'
import {Button, Container, Grid, Checkbox, FormControlLabel} from '@mui/material';
import {setQueryParams} from '../../appSlice';
import {useDispatch, useSelector} from 'react-redux';
import useTranslate from '../../hooks/useTranslate';

const FormControls = props => {
    const {formik} = props;
    const {translate} = useTranslate();
    const dispatch = useDispatch();
    const {currentIndex, linkData} = useSelector(state => state.viewer);
    const {queryParams} = useSelector(state => state.app);

    const styles = {
        formControls: {
          marginTop: '20px',
          marginBottom: '20px'
        },
        buttonWrapper: {
            textAlign: 'right'
        },
        control: {
            margin: '0 2px 4px'
        }
    }

    const backHandler = () => {
        console.log('Back Handler');
        if(currentIndex - 1 >= 0) {
            dispatch(setQueryParams({ ...queryParams, crfIndex: String(currentIndex - 1) }));
        }
    }

    const saveHandler = () => {
        console.log('Save Handler');
        formik.handleSubmit();
    }

    const nextHandler = () => {
        console.log('Next Handler');
        if(currentIndex + 1 !== linkData.CRFs.length) {
            dispatch(setQueryParams({ ...queryParams, crfIndex: String(currentIndex + 1) }));
        }
    }

    const finishHandler = () => {
        console.log('Finish Handler');
    }

    const oneMoreHandler = () => {
        console.log('One More Handler');
    }

    const handleChange = () => {
        console.log('Change Handler');
    }

    return (
        <Container style={styles.formControls}>
            <Grid container>
                <Grid item xs={12} style={styles.buttonWrapper}>
                    <Button variant="contained" color="success" onClick={backHandler} style={styles.control}> { translate('GLOBAL$BACK') } </Button>
                    <Button variant="contained" color="success" onClick={saveHandler} style={styles.control}> { translate('GLOBAL$SAVE') } </Button>
                    <Button variant="contained" color="success" onClick={nextHandler} style={styles.control}> { translate('GLOBAL$NEXT') } </Button>
                    <Button variant="contained" color="success" onClick={finishHandler} style={styles.control}> { translate('GLOBAL$FINISH') } </Button>
                    <Button variant="contained" color="primary" onClick={oneMoreHandler} style={styles.control}> { translate('GLOBAL$ONE_MORE') } </Button>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={false} onChange={handleChange} name="antoine" />
                        }
                        label='Mark as closed'
                    />
                    <p>If you mark this CRF as 'Closed', you will be not able to change the data next time.</p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FormControls;