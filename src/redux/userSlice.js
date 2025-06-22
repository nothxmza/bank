import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";



const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.login(data);
            if (response.status === 200) {
                const userData = await api.getUser(response.body.token);
                return {
                    user: {
                        firstName: userData.body.firstName,
                        lastName: userData.body.lastName,
                    },
                    token: response.body.token,
                };
            } else {
                return rejectWithValue(response.message || "Identifiants invalides");
            }
        } catch (error) {
            return rejectWithValue(error.message || "Erreur serveur");
        }
    }
);

const initialState = {
	user: null,
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.user = null;
			state.token = null;
			state.isLoggedIn = false;
		},
		updateUser(state, action) {
			state.user.firstName = action.payload.firstName;
			state.user.lastName = action.payload.lastName;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
				state.error = "Login failed";
			});
	},
})

export const { setUser, logout, updateUser } = userSlice.actions;
export { login }
export default userSlice.reducer;