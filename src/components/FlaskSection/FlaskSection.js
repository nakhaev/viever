import React from 'react';
import './FlaskSection.scss';
import ViewerWrapper from '../ViewerWrapper/ViewerWrapper';
import ResponsiveItem from '../ResponsiveItem/ResponsiveItem';
import FlaskCard from '../FlaskCard/FlaskCard';
import {fieldLocal} from '../../services/translate.service';

const FlaskSection = props => {
    const {name, description, items} = props;
    return (
        <React.Fragment>
            <div style={{textAlign: 'center'}}>
                <h4>{ fieldLocal(name) }</h4>
                <h5>{ fieldLocal(description) }</h5>
            </div>
            <ViewerWrapper spacing={2} mode="container">
                {items.map(item => {
                    return (
                        <ResponsiveItem layoutType={0} columns={5} key={item.id}>
                            <FlaskCard data={item} />
                        </ResponsiveItem>
                    )
                })}
            </ViewerWrapper>
        </React.Fragment>
    )
}

export default FlaskSection;
