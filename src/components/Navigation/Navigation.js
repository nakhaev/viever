import React from 'react';
import './Navigation.scss';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import navigations from '../../constants/navigation.json'
import AppActions from '../AppActions/AppActions'

const Navigation = () => {
    return (
        <>
            <Toolbar id="navigation">
                {navigations.map((item, index) => {
                    return <NavLink key={item.label+index} to={item.path} exact className="nav-item"> {item.label} </NavLink>
                })}
                <LanguageSelector />
            </Toolbar>
            <AppActions />
        </>
    );
};

export default Navigation;