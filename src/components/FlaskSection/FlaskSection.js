import React from 'react';
import './FlaskSection.scss';
import ViewerWrapper from '../ViewerWrapper/ViewerWrapper';
import ResponsiveItem from '../ResponsiveItem/ResponsiveItem';
import FlaskCard from '../FlaskCard/FlaskCard';
import useTranslate from '../../hooks/useTranslate';

const FlaskSection = props => {
    const {fieldLocal} = useTranslate();
    const {name, description, items, layout_type, layout_columns, formik} = props;

    return (
        <React.Fragment>
            <div style={{textAlign: 'center'}}>
                <h4>{ fieldLocal(name) }</h4>
                <h5>{ fieldLocal(description) }</h5>
            </div>
            <ViewerWrapper spacing={2} mode="container">
                {items.map(item => {
                    return (
                        <ResponsiveItem layoutType={layout_type} columns={layout_columns} key={item.id}>
                            <FlaskCard data={item} layoutType={layout_type} formik={formik}/>
                        </ResponsiveItem>
                    )
                })}
            </ViewerWrapper>
        </React.Fragment>
    )
}

export default FlaskSection;
