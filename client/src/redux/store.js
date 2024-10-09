import {configureStore} from '@reduxjs/toolkit';
import darkmodeReducer from '../features/darkmode/darkmodeSlice';
import signinReducer from '../features/signin/signinSlice';

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        signin: signinReducer
    }
});