import {useEffect, useState} from 'react';

const useCRF = crf => {
    const [initialValues, setInitialValues] = useState([]);
    // const [validate, setValidate] = useState(values => {});
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    useEffect(() => {
        const values = {};
        const sections = crf.sections ? crf.sections : [];
        sections.map(section => {
            const items = section.items ? section.items : [];
            items.map(item => {
                values[item.name] = item.value && item.value[0] ? item.value[0] : '';
                return item;
            })
            return section;
        });
        setInitialValues(values);
    }, [crf]);

    return {
        initialValues,
        validate
    }
}

export default useCRF;