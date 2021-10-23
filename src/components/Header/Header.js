import React, {useState} from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <AppBar position="static" style={{backgroundColor: '#263238'}}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <img alt="home" height="24px" src="/flask_white_icon.svg" />
                    <Button color="inherit"> View current CRF </Button>

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

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
};
