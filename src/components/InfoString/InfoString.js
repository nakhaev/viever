import React from 'react';
import './InfoString.scss';

const InfoString = props => {
    const {subject, name, CRFs, currentIndex, siteName, studyName} = props;
    const CRF = CRFs[currentIndex]
    return (
        <h4 className="InfoString">
            <span><b>Subject ID: </b>{subject.subjectId}, </span>
            <span><b>Event: </b>{name['ENGLISH']}, </span>
            <span><b>CRF: </b>{CRF.name['ENGLISH']} v{CRF.flask_crf_version}, </span>
            <span><b>Site: </b>{siteName}, </span>
            <span><b>Study: </b>{studyName}, </span>
            <span><b>Created: </b>{CRF.date_created.toString()} <b>by</b> {CRF.creator_name}, </span>
            <span><b>Updated: </b>{CRF.date_updated.toString()} <b>by</b> {CRF.editor_name}, </span>
            <span><b>Status: </b>{CRF.crfStatus} </span>
        </h4>
    )
}

export default InfoString;
