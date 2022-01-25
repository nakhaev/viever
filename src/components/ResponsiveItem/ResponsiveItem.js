import React from 'react';
import './ResponsiveItem.scss';
import { Grid } from '@mui/material';

const ResponsiveItem = (props) => {
    const { layoutType, columns, children } = props;
    let options = { xs: 12 };
    let style = {}
    if(layoutType === 0) style = {maxWidth: '600px', margin: '0 auto'};
    const fiveColumnStyle = {maxWidth: '20%', boxSizing: 'border-box', margin: 0, flexDirection: 'row', flexBasis: '20%', flexGrow: 0};
    const defaultBreakPoints = {xs: 12, sm: 6, md: 4, lg: 3, sx: {maxWidth: { xl: '20%' }}};

    if(layoutType > 0) {
        switch(columns) {
            default: options = defaultBreakPoints;
                break;
            case 0: options = defaultBreakPoints;
                break;
            case 1: options = {xs: 12};
                break;
            case 2: options = {xs: 6};
                break;
            case 3: options = {xs: 4};
                break;
            case 4: options = {xs: 3};
                break;
            case 5: options = {style: fiveColumnStyle};
                break;
            case 6: options = {xs: 2};
                break;
        }
    }

    return (
        <Grid item { ...options} style={style} className="responsiveItem">
            {children}
        </Grid>
    )
}

export default ResponsiveItem;
