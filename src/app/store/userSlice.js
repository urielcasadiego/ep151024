import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email === 'user@example.com' && credentials.password === 'password') {
                resolve({ email: credentials.email, token: 'fake_token_123' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: '',
        status: 'idle',
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.email = '';
            state.token = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.token = action.payload.token;
                state.status = 'succeeded';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
