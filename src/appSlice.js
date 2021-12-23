import {createSlice} from "@reduxjs/toolkit";
import {getEventData, getStudyLanguages} from './services/api.service';
import _ from 'lodash';
import {toastr} from 'react-redux-toastr';

const initialState = {
    user: null,
    languages: null,
    linkData: null,
    currentLanguage: 'en'
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setLinkData: (state, action) => {
            return { ...state, linkData: action.payload };
        },
        setUser: (state, action) => {
            return { ...state, user: action.payload };
        },
        setLanguages: (state, action) => {
            return { ...state, languages: action.payload };
        },
        setLanguage: (state, action) => {
            return { ...state, currentLanguage: action.payload };
        },
    }
});

export const getLinkData = (pathname) => async (dispatch) => {
    try {
        const data = await getEventData(pathname);
        data.CRFs = _.sortBy(data.CRFs, ['order']);
        dispatch(setLinkData(data));
        toastr.success('Success', 'Data was received successfully');
    } catch(error) {
        toastr.error('Error', error.message);
    }
}

export const getLanguages = (study_id) => async (dispatch) => {
    const data = await getStudyLanguages({study_id, customer_id: null});
    dispatch(setLanguages(data));
}

export const { clearState, setData, setUser, setLinkData, setLanguages, setLanguage } = appSlice.actions;
export default appSlice.reducer;