import {configureStore} from '@reduxjs/toolkit';
import darkmodeReducer from './slices/darkmode/darkmodeSlice';
import signinReducer from './slices/signin/signinSlice';

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        signin: signinReducer
    }
});