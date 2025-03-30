import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res1 = await axios.post(`${BASE_URL}/users`, payload);

      const res2 = await axios.post(`${BASE_URL}/auth/login`, payload);

      const { access_token, refresh_token } = res2.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      
      return res1.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const refreshUser = createAsyncThunk(
  "users/refreshUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/refresh-token`, payload);

      const { access_token, refresh_token } = res.data;

      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);

      const { access_token, refresh_token } = res.data;

      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      return login.data;

    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id)

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item;
        })
      } else {
        newCart.push({ ...payload, quantity: 1 })
      }

      state.cart = newCart;
    },
    incItem: (state, { payload }) => {
      let newCart = [...state.cart];

      newCart = newCart.map((item) => {
        return item.id === payload.id && item.quantity < 20 ? { ...item, quantity: item.quantity + 1 } : item;
      })

      state.cart = newCart;
    },
    decItem: (state, { payload }) => {
      let newCart = [...state.cart];

      newCart = newCart.map((item) => {
        return item.id === payload.id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item;
      })

      state.cart = newCart;
    },
    deleteItem: (state, { payload }) => {
      let newCart = [...state.cart];
      newCart = newCart.filter((item) => item.id != payload.id)

      state.cart = newCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, addCurrentUser)
    builder.addCase(createUser.fulfilled, addCurrentUser)
    builder.addCase(loginUser.fulfilled, addCurrentUser)
    builder.addCase(refreshUser.fulfilled, addCurrentUser)
  }
})

export const { addItemToCart, toggleForm, toggleFormType, incItem, decItem, deleteItem } = userSlice.actions;

export default userSlice.reducer;