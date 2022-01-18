import {useSelector} from 'react-redux';
import dictionaries from '../constants/dictionaries';
import _ from 'lodash';

const useTranslate = () => {
    let defaultLanguage = 'ENGLISH';
    let {currentLanguage, languages} = useSelector(state => state.app);

    const translate =  (key = '') => {
        if (!dictionaries[currentLanguage]) {
            console.error(`[Translate service] language '${currentLanguage}' is not supported...`);
            currentLanguage = 'en';
        }
        if (!_.isString(key)) {
            console.error(`[Translate service] received argument is not a string ${key}`);
            return '';
        }
        if (key === '') { return key; }
        if (!dictionaries[currentLanguage][key]) { return key; }
        return dictionaries[currentLanguage][key];
    }

    const fieldLocal = (field = {}) => {
        let selectedLanguage = _.find(languages, item => item.languagekey === currentLanguage);

        let langEnum = '';
        if (!dictionaries[currentLanguage] || !selectedLanguage || !selectedLanguage.enum) {
            console.error(`[Translate service] language '${currentLanguage}' is not supported...`);
            currentLanguage = 'en';
            langEnum = 'ENGLISH';
        } else {
            langEnum = selectedLanguage.enum;
        }

        if (!_.isObject(field)) {
            console.error(`[Translate service] received argument is not a object ${field}`);
            return '';
        }
        if (!field[langEnum]) return field[defaultLanguage];
        return field[langEnum];
    }

    return { translate, fieldLocal };
};

export default useTranslate;