import React from 'react';
import { Grid } from '@mui/material';
import './Footer.scss';
// import { Grid, List, ListItem, ListItemText } from '@mui/material';

export default function Footer() {
    const currentYear = (new Date()).getFullYear();
    return(
        <Grid container  id="footer">
            <Grid item xs={12}>
                <p>Copyright 2018-{currentYear} <a href="https://www.flaskdata.io/">Flaskdata.io</a></p>
            </Grid>
            <Grid item xs={12}>
                <ul className="list-inline footer-menu">
                    <li className="footer-link"><a
                        href="https://app.flaskdata.io/privacy.html">Privacy Policy </a>
                    </li>
                    <li className="vertical-delimiter">&nbsp;</li>
                    <li className="footer-link"><a
                        href="https://app.flaskdata.io/tos.html">Terms of Service </a>
                    </li>
                </ul>
                {/*<List dense={true}>*/}
                {/*    <ListItem> <ListItemText primary="Single-line item" /> </ListItem>*/}
                {/*    <ListItem> <ListItemText primary="Single-line item" /> </ListItem>*/}
                {/*    <ListItem> <ListItemText primary="Single-line item" /> </ListItem>*/}
                {/*</List>*/}
            </Grid>
        </Grid>
    )
};
