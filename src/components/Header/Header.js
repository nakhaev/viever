import React from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import config from '../../config';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

export default function Header() {
    return(
        <Box sx={{ flexGrow: 1 }} id="header">
            <AppBar position="static" id="app-bar">
                <a href={config.flaskUrl}> <img alt="home" height="24px" src="/flask_white_icon.svg" id="logoImage"/> </a>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
                    <Navigation />
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
                    <MobileNavigation />
                </Box>
            </AppBar>
        </Box>
    )
};
