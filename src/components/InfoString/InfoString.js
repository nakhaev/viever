import React from 'react';
import './InfoString.scss';
import useTranslate from '../../Hooks/useTranslate';

const InfoString = props => {
    const {translate, fieldLocal} = useTranslate();
    const {subject, name, CRFs, currentIndex, siteName, studyName} = props;
    const CRF = CRFs[currentIndex]
    return (
        <h4 className="InfoString">
            <span><b>{ translate('GLOBAL$SUBJECT_ID') }: </b>{subject.subjectId}, </span>
            <span><b>{ translate('LOG$TABLE_TH_1') }: </b>{ fieldLocal(name) }, </span>
            <span><b>{ translate('GLOBAL$CRF') }: </b>{ fieldLocal(CRF.name) } v{CRF.flask_crf_version}, </span>
            <span><b>{ translate('GLOBAL$SITE') }: </b>{siteName}, </span>
            <span><b>{ translate('GLOBAL$STUDY') }: </b>{studyName}, </span>
            <span><b>{ translate('GLOBAL$CREATED') }: </b>{CRF.date_created.toString()} <b>by</b> {CRF.creator_name}, </span>
            <span><b>{ translate('GLOBAL$UPDATED') }: </b>{CRF.date_updated.toString()} <b>by</b> {CRF.editor_name}, </span>
            <span><b>{ translate('GLOBAL$STATUS') }: </b>{CRF.crfStatus} </span>
        </h4>
    )
}

export default InfoString;
