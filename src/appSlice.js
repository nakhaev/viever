import {createSlice} from "@reduxjs/toolkit";
import {getSelf} from './services/auth.service'
import {storage} from './services/storage.service';

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

export const authorization = (token) => async (dispatch) => {
    const storedUser = storage.get('user');
    let authToken = null;

    if(token && token !== '') {
        authToken = token;
    } else if (storedUser) {
        authToken = storedUser.token;
    }

    if(authToken) {
        try {
            const user = await getSelf(authToken);
            if(user) user.token = authToken;
            storage.set('user', user);
            dispatch(setUser(user));
            console.log('AUTHORIZED SUCCESSFULLY');
        } catch(error) {
            storage.remove('user');
            dispatch(setUser(null));
            console.log('UNAUTHORIZED');
        }
    }
}

export const { clearState, setUser, setLinkData, setLanguages, setLanguage } = appSlice.actions;
export default appSlice.reducer;