import React, {useState} from 'react';
import './MobileNavigation.scss';
import navigation from '../../constants/navigation.json';
import Button from '@mui/material/Button';
import {Menu, MenuItem, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Box from '@mui/material/Box';
import AppActions from '../AppActions/AppActions';
import useTranslate from '../../Hooks/useTranslate';

const MobileNavigation = () => {
    const {translate} = useTranslate();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateTo = (path) => {
        history.push(String(path));
    }

    return (
        <Box id='mobile_navigation'>
            <LanguageSelector />

            <Button
                style={{minHeight: '64px'}}
                // className="nav-item"
                id="mobile-navigation-button"
                aria-controls="mobile-navigation-button"
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
                    'aria-labelledby': 'mobile-navigation-menu',
                }}
            >
                {navigation.map((item, index) => {
                    return <MenuItem key={item.label+index} onClick={() => navigateTo(item.path)} className="nav-item"> {translate(item.label)} </MenuItem>
                })}
                <Divider />
                <AppActions embedded="true"/>
            </Menu>
        </Box>
    )
}

export default MobileNavigation;