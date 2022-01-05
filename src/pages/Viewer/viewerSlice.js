import {createSlice} from '@reduxjs/toolkit';
import {getEventData, getStudyLanguages} from '../../services/api.service';
import _ from 'lodash';
import {toastr} from 'react-redux-toastr';
import {setLanguages, setLinkData} from '../../appSlice';

const initialState = {
    currentCrf: null,
    currentIndex: 0
};

const viewerSlice = createSlice({
    name: 'viewer',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setLinkData: (state, action) => {
            return { ...state, linkData: action.payload };
        },
        setCurrentIndex: (state, action) => {
            return { ...state, currentIndex: action.payload };
        },
        setCrf: (state, action) => {
            return { ...state, currentCrf: action.payload };
        }
    }
});

export const getLinkData = (pathname, history) => async (dispatch) => {
    if(pathname === '') {
        return history.push('/incorrect-link');
    }
    try {
        const data = await getEventData(pathname);
        data.CRFs = _.sortBy(data.CRFs, ['order']);
        dispatch(setLinkData(data));
    } catch(error) {
        toastr.error('Failed to get data')
        history.push('/incorrect-link');
    }
}

export const getLanguages = (study_id) => async (dispatch) => {
    try {
        const data = await getStudyLanguages({study_id, customer_id: null});
        dispatch(setLanguages(data));
    } catch (error) {
        console.log('Receiving of study languages failed...', error);
    }
}

export const setCurrentCrf  = (index) => async (dispatch, getState) => {
    const {linkData} = getState().app;
    if(linkData && linkData.CRFs) {
        dispatch(setCrf(linkData.CRFs[index]));
    }
}

export const { clearState, setCurrentIndex, setCrf} = viewerSlice.actions;
export default viewerSlice.reducer;