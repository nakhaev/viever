import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import viewerSlice from './pages/Viewer/viewerSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        viewer: viewerSlice
    },
});

export default store;