import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rowId: 0,
  formdata: {
    firstname: { val: '', error: false },
    lastname: { val: '', error: false },
    department: { val: '', error: false },
  },
  data: [],
};

const formSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.formdata.firstname.val = action.payload;
      state.formdata.firstname.error =
        state.formdata.firstname.val.trim().length === 0;
    },
    setLastName: (state, action) => {
      state.formdata.lastname.val = action.payload;
      state.formdata.lastname.error =
        state.formdata.lastname.val.trim().length === 0;
    },
    setBirthDate: (state, action) => {
      state.formdata.birthdate = action.payload;
    },
    setStartDate: (state, action) => {
      state.formdata.startdate = action.payload;
    },
    setStreet: (state, action) => {
      state.formdata.street = action.payload;
    },
    setCity: (state, action) => {
      state.formdata.city = action.payload;
    },
    setState: (state, action) => {
      state.formdata.state = action.payload;
    },
    setZipCode: (state, action) => {
      state.formdata.zipcode = action.payload;
    },
    setDepartment: (state, action) => {
      state.formdata.department.val = action.payload;
    },
    submitForm: (state) => {
      if (
        state.formdata.firstname.val.trim().length &&
        state.formdata.lastname.val.trim().length &&
        state.formdata.department.val.length
      ) {
        state.rowId += 1;
        state.formdata.id = state.rowId;
        state.data.push(state.formdata);
        state.formdata = {
          firstname: { val: '', error: false },
          lastname: { val: '', error: false },
          department: { val: '', error: false },
        };
      } else {
        if (!state.formdata.firstname.val.trim().length)
          state.formdata.firstname.error = true;
        if (!state.formdata.lastname.val.trim().length)
          state.formdata.lastname.error = true;
        if (!state.formdata.department.val.length)
          state.formdata.department.error = true;
      }
    },
  },
});

export default formSlice.reducer;
export const {
  setFirstName,
  setLastName,
  setBirthDate,
  setStartDate,
  setStreet,
  setCity,
  setState,
  setZipCode,
  setDepartment,
  submitForm,
} = formSlice.actions;
