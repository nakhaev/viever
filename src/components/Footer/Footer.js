import React from 'react';
import { Grid } from '@mui/material';
import './Footer.scss';
import {translate} from '../../services/translate.service';

export default function Footer() {
    const currentYear = (new Date()).getFullYear();
    return(
        <Grid container  id="footer">
            <Grid item xs={12}>
                <p>{ translate('FOOTER$COPYRIGHT') } 2018-{currentYear} <a href="https://www.flaskdata.io/">Flaskdata.io</a></p>
            </Grid>
            <Grid item xs={12}>
                <ul className="list-inline footer-menu">
                    <li className="footer-link"><a
                        href="https://app.flaskdata.io/privacy.html">{ translate('FOOTER$PRIVACY') }</a>
                    </li>
                    <li className="vertical-delimiter">&nbsp;</li>
                    <li className="footer-link"><a
                        href="https://app.flaskdata.io/tos.html">{ translate('FOOTER$TERMS_OF_USE') }</a>
                    </li>
                </ul>
            </Grid>
        </Grid>
    )
};
