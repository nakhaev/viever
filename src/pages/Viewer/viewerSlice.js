import {createSlice} from '@reduxjs/toolkit';
import {getEventData} from '../../services/api.service';
import _ from 'lodash';
import {toastr} from 'react-redux-toastr'

const initialState = {
    linkData: null,
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
        setData: (state, action) => {
            return { ...state, ...action.payload };
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

export const getLinkData = (pathname) => async (dispatch) => {
    try {
        const data = await getEventData(pathname);
        data.CRFs = _.sortBy(data.CRFs, ['order']);
        dispatch(setLinkData(data));
        toastr.success('Error', 'Data was received successfully');
    } catch(error) {
        toastr.error('Error', error.message);
    }
}

export const setCurrentCrf  = (index) => async (dispatch, getState) => {
    const {linkData} = getState().viewer;
    if(linkData && linkData.CRFs) {
        dispatch(setCrf(linkData.CRFs[index]));
    }
}

export const { clearState, setData, setCurrentIndex, setLinkData, setCrf} = viewerSlice.actions;
export default viewerSlice.reducer;