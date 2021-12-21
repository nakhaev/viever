import React, {useState} from 'react';
import './AppActions.scss';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu, MenuItem} from '@mui/material';

const AppActions = (props) => {
    const { embedded } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log('Logout');
    }

    // create list of menu items
    const actions = () => {
        return (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        )
    }

    // return list of menu items to insert them into parent menu
    if(embedded) {
        return actions();
    }

    // return separate menu
    return (
        <>
            <Button
                style={{minHeight: '64px'}}
                className="nav-item"
                id="mobile-navigation"
                aria-controls="mobile-navigation-menu"
                aria-haspopup="true"
                color="inherit"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="mobile-navigation-menu"
                className="mobile-navigation-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(null)}
                MenuListProps={{
                    'aria-labelledby': 'mobile-navigation',
                }}
            >
                {actions()}
            </Menu>
        </>
    )
}

export default AppActions;