import React from 'react';
import './Navigation.scss';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import navigations from '../../constants/navigation.json'
import AppActions from '../AppActions/AppActions'
import {useSelector} from 'react-redux';

const Navigation = () => {
    const {currentLink} = useSelector(state => state.app);

    if(currentLink) {
        navigations.map(item => {
            if(item.path === '/') {
                item.path = currentLink.pathname + currentLink.search;
            }
            return item;
        });
    }

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