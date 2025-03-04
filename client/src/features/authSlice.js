import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initializeAuth = createAsyncThunk("auth/initialize", async () => {
    const fetchAccessToken = async () => {
        try {
          const response = await fetch('/api/auth', {
            method: 'GET',
            credentials: 'include', // Important to send HTTP-only cookies
          });
      
          if (response.ok) {
            const data = await response.json();
            return {
                is_loading: false,
                access_token: data.accessToken,
                username: data.username,
            };
          } 
          else {
            return {
                is_loading: false,
                access_token: null,
                username: ""
            }; 
          }
        } catch (error) {
          return {
            is_loading: false,
            access_token: null,
            username: ""
          }; 
        }
    };
    
    return await fetchAccessToken();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        is_loading: true,
        access_token: null,
        username: ""
    },
    reducers: {
        log_in(state, action) {
            state.access_token = action.payload.access_token;
            state.username = action.payload.username;
        },
        log_out(state) {
            state.access_token = null;
            state.username = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(initializeAuth.fulfilled, (state, action) => {
          state.access_token = action.payload.access_token;
          state.is_loading = action.payload.is_loading;
          state.username = action.payload.username;
        });
    }
});

export const {log_in, log_out}  = authSlice.actions
export default authSlice.reducer;