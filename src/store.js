import {configureStore} from '@reduxjs/toolkit';
import {reducer as toastrReducer} from 'react-redux-toastr';
import appSlice from './appSlice';
import viewerSlice from './pages/Viewer/viewerSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        viewer: viewerSlice,
        toastr: toastrReducer
    },
});

export default store;