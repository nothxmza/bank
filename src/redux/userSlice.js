import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	isLoggedIn: false,
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
	}
})

export const { setUser, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;