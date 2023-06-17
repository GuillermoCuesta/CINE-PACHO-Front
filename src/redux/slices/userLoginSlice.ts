import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	email: '',
	business_name: '',
	contact_name: '',
	type_document: '',
	c_comercio: {},
	address: '',
	city: '',
	audit_create_user: '',
	contact_phone_number: '',
	rut: {},
	audit_create_date: new Date(),
	document_id: '',
	profile_picture: { file_name: '', url_file: '' },
};

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		setUserLogin: (state, action) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
		},
	},
});

export const { setUserLogin } = userLoginSlice.actions;

export default userLoginSlice.reducer;
