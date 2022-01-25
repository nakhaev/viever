import {useEffect, useState} from 'react';
import itemTypes from '../constants/itemTypes.json';
import * as Yup from 'yup';

function getInitial(crf) {
    let values = {};
    if(crf) {
        const sections = crf.sections ? crf.sections : [];
        sections.map(section => {
            const items = section.items ? section.items : [];
            items.map(item => {
                values[item.name] = item.value && item.value[0] ? item.value[0] : '';
                return item;
            })
            return section;
        });
    }
    return values;
}

function getValidate(crf) {
    const shape = {};
    if(crf) {
        const sections = crf.sections ? crf.sections : [];
        sections.map(section => {
            const items = section.items ? section.items : [];
            items.map(item => {
                shape[item.name] = Yup.string();
                const adds = item.adds ? item.adds : {};
                switch (item.type) {
                    default: shape[item.name] = Yup.string(); break;
                    case itemTypes.INPUT: {
                        shape[item.name] = Yup.string();
                        if(adds.pattern) {
                            let regExp = new RegExp(adds.pattern);
                            shape[item.name] = shape[item.name].matches(regExp, { excludeEmptyString: true });
                        }
                    }
                        break;
                    case itemTypes.NUMBER: {
                        shape[item.name] = Yup.number();
                        if(adds.min) shape[item.name] = shape[item.name].min(adds.min);
                        if(adds.max) shape[item.name] = shape[item.name].max(adds.max);
                        // if(adds.maxlength) shape[item.name] = shape[item.name];
                        // if(adds.minlength) shape[item.name] = shape[item.name];

                    }
                        break;
                    case itemTypes.TEXTAREA: shape[item.name] = Yup.string(); break;
                }
                if(adds.required) shape[item.name] = shape[item.name].required();
                return item;
            })
            return section;
        });
    }
    console.log('shape', shape);

    // shape = {
    //     NAME1532_0216154807: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('Required'),
    //     AGE1532_0216154807: Yup.number()
    //         .min(2, 'Too small!')
    //         .max(50, 'Too big!')
    //         .required('Required')
    // }

    return Yup.object().shape(shape);
}

function onSubmit(values) {
    console.log('onSubmit');
    alert(JSON.stringify(values, null, 2));
}

const useForm = (crf) => {

    const [initialValues, setInitialValues] = useState(() => getInitial(crf));
    const [validationSchema, setValidationSchema] = useState(() => getValidate(crf));

    useEffect(() => {
        setInitialValues(getInitial(crf));
        setValidationSchema(getValidate(crf));
    }, [crf]);

    return {
        initialValues,
        validationSchema,
        onSubmit
    }

}

export default useForm;