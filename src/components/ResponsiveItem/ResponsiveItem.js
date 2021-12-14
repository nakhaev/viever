import React from 'react';
import './ResponsiveItem.scss';
import { Grid } from '@mui/material';

const ResponsiveItem = (props) => {
    const { layoutType, columns, children } = props;
    let options = { xs: 12 };

    if(layoutType > 0) {
        switch(columns) {
            default: options = {xs: 12, sm: 6, md: 4, lg: 3, xl: 2};
                break;
            case 0: options = {xs: 12, sm: 6, md: 4, lg: 3, xl: 2};
                break;
            case 1: options = {xs: 12};
                break;
            case 2: options = {xs: 6};
                break;
            case 3: options = {xs: 4};
                break;
            case 4: options = {xs: 3};
                break;
            case 5: options = {xs: 2};
                break;
            case 6: options = {xs: 2};
                break;
        }
    }

    return (
        <Grid item { ...options} className="responsiveItem">
            {children}
        </Grid>
    )
}

export default ResponsiveItem;
