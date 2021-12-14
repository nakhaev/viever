import React from 'react';
import './ViewerWrapper.scss'
import { Container, Grid } from '@mui/material';

const ViewerWrapper = (props) => {
    const {children, spacing, mode} = props;
    const defSpacing = 0;
    if(mode === 'container') {
        return (
            <Container>
                <Grid container spacing={spacing ? spacing : defSpacing} className="viewerWrapper">
                    {children}
                </Grid>
            </Container>
        )
    } else {
        return (
            <Grid container spacing={spacing ? spacing : defSpacing} className="viewerWrapper">
                {children}
            </Grid>
        )
    }
}

export default ViewerWrapper;
