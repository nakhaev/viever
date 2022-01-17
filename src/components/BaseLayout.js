import React from 'react';
import { Grid } from '@mui/material';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function BaseLayout(props) {
    const {children, Header, Footer} = props;
    return(
        <Grid container style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <Grid container>
                    {/* header */}
                    {Header && <Grid item xs={12}> <Header /> </Grid>}
                    {/* main block */}
                    <Grid item xs={12}> {children} </Grid>
                </Grid>
            </Grid>
            {/* footer */}
            {Footer && <Grid item xs={12} style={{ alignSelf: 'flex-end'}}> <Footer /> </Grid>}
        </Grid>
    )
}
