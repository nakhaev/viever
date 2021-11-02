import React, {useState} from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import config from '../../config';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Box sx={{ flexGrow: 1 }} id="header">
            <AppBar position="static" id="app-bar">
                <a href={config.flaskUrl}>
                    <img alt="home" height="24px" src="/flask_white_icon.svg" id="logoImage"/>
                </a>

                <Toolbar id="navigation">
                    <NavLink to={'/'}> View current CRF </NavLink>
                    <NavLink to={'/log'}> Log </NavLink>

                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        color="inherit"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Languages
                        <ExpandMoreIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>English</MenuItem>
                        <MenuItem onClick={handleClose}>Russian</MenuItem>
                        <MenuItem onClick={handleClose}>Hebrew</MenuItem>
                    </Menu>


                </Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    id="menuButton"
                >
                    <MenuIcon />
                </IconButton>
            </AppBar>
        </Box>
    )
};
