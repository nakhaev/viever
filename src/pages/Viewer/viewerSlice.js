import {createSlice} from '@reduxjs/toolkit';

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
        setCurrentIndex: (state, action) => {
            return { ...state, currentIndex: action.payload };
        },
        setCrf: (state, action) => {
            return { ...state, currentCrf: action.payload };
        }
    }
});

export const setCurrentCrf  = (index) => async (dispatch, getState) => {
    const {linkData} = getState().app;
    if(linkData && linkData.CRFs) {
        dispatch(setCrf(linkData.CRFs[index]));
    }
}

export const { clearState, setCurrentIndex, setCrf} = viewerSlice.actions;
export default viewerSlice.reducer;