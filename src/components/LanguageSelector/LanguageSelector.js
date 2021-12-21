import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Menu, MenuItem} from '@mui/material';
import {setLanguage} from '../../appSlice';
import './LanguageSelector.scss';

const LanguageSelector = () => {
    const {languages, currentLanguage} = useSelector(state => state.app);
    const dispatch = useDispatch();

    const defaultLanguage = {
        direction: "ltr",
        enum: "ENGLISH",
        id: 1,
        languagekey: "en",
        name: "English"
    }
    const [selectorLanguages, setSelectorLanguages] = useState([defaultLanguage]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang) => {
        if(lang && lang !== '') dispatch(setLanguage(lang))
        setAnchorEl(null);
    };

    useEffect(() => {
        if(languages) setSelectorLanguages(languages);
    }, [languages]);

    return (
        <>
            <Button
                className="nav-item"
                id="language-selector"
                aria-controls="language-selector-menu"
                aria-haspopup="true"
                color="inherit"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                    >
                Languages
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Menu
                id="language-selector-menu"
                className="language-selector-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(null)}
                MenuListProps={{
                    'aria-labelledby': 'language-selector',
                }}
                    >
                {selectorLanguages.map(item => {
                    return (
                        <MenuItem
                            key={item.id}
                            onClick={() => handleClose(item.languagekey)}
                            className={item.languagekey === currentLanguage ? 'selected' : ''}
                            >
                            {item.name}
                        </MenuItem>
                    )
                })}
            </Menu>
        </>
    )
};

export default LanguageSelector;