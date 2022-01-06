import dictionaries from '../constants/dictionaries';
import _ from 'lodash';
import store from '../store';

/**
 * Translate service provide translation functionality within application
 */
export class TranslateService {
    static translate (key = '') {
        let {currentLanguage} = store.getState().app;
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

    static fieldLocal (field = {}) {
        let {currentLanguage, languages} = store.getState().app;
        let selectedLanguage = _.find(languages, item => item.languagekey === currentLanguage);

        let langEnum = 'ENGLISH';
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
        if (!field[langEnum]) { return field.ENGLISH; }
        return field[langEnum];
    }
}

export const translate = TranslateService.translate;
export const fieldLocal = TranslateService.fieldLocal;
export default TranslateService;
