import {createSlice} from "@reduxjs/toolkit";
import { getStudyLanguages} from './services/api.service';

const initialState = {
    user: null,
    languages: null,
    currentLanguage: 'en'
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setData: (state, action) => {
            return { ...state, ...action.payload };
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

export const getLanguages = (study_id) => async (dispatch) => {
    const data = await getStudyLanguages({study_id, customer_id: null});
    dispatch(setLanguages(data));
}

export const { clearState, setData, setUser, setLanguages, setLanguage } = appSlice.actions;
export default appSlice.reducer;