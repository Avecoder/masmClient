import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'


export const fetchSendLink = createAsyncThunk('auth/fetchSendLink', async email => {
  const { data } = await axios.post('/auth/link', {
    email
  })
  return data
})


export const fetchCheckLink = createAsyncThunk('posts/fetchCheckLink', async auth_token => {
  const { data } = await axios.get('/auth/link', {
    params: { auth_token }
  })
  return data
})


export const fetchAuthLogin = createAsyncThunk('auth/fetchAuthLogin', async params => {
  const { data } = await axios.post('/auth/login', params)

  return data
})


export const fetchAuthRegiser = createAsyncThunk('auth/fetchAuthRegiser', async params => {
  const { data } = await axios.post('/auth/registration', params)

  return data
})


export const fetchGetMe = createAsyncThunk('auth/fetchGetMe', async () => {
  const { data } = await axios.get('/auth/me')

  return data
})


const initialState = {
  data: null,
  status: 'loading',
  linkStatus: 'sending',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    }
  },
  extraReducers: {
    [fetchSendLink.pending]: (state) => {
      state.linkStatus = 'sending'
    },
    [fetchSendLink.fulfilled]: (state) => {
      state.linkStatus = 'sended'
    },
    [fetchSendLink.rejected]: (state) => {
      state.linkStatus = 'error'
    },
    [fetchAuthLogin.pending]: (state) => {
      state.status = 'loading'
      state.data = null
    },
    [fetchAuthLogin.fulfilled]: (state, action) => {
      state.status = 'loaded'
      const {passwordHash, ...userData} = action.payload
      state.data = userData
    },
    [fetchAuthLogin.rejected]: (state) => {
      state.status = 'error'
      state.data = null
    },
    [fetchCheckLink.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchCheckLink.fulfilled]: (state) => {
      state.status = 'loaded'
    },
    [fetchCheckLink.rejected]: (state) => {
      state.status = 'error'
    },
    [fetchAuthRegiser.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchAuthRegiser.fulfilled]: (state, action) => {
      state.status = 'loaded'
      const {passwordHash, ...userData} = action.payload
      state.data = userData
    },
    [fetchAuthRegiser.rejected]: (state) => {
      state.status = 'error'
      state.data = null
    },
    [fetchGetMe.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchGetMe.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.data = action.payload
    },
    [fetchGetMe.rejected]: (state) => {
      state.status = 'loaded'
    },
  }
})


export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
