import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const getPosts = async category => {
  const { data } = await axios.get(`/posts/${category}`)
  return data
}

export const fetchDocsPosts = createAsyncThunk('posts/fetchDocsPosts', async () => await getPosts('docs'))
export const fetchLabsPosts = createAsyncThunk('posts/fetchLabsPosts', async () => await getPosts('labs'))
export const fetchVideoPosts = createAsyncThunk('posts/fetchVideoPosts', async () => await getPosts('video'))


export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async id => {
  const { data } = await axios.delete(`/posts/${id}`)

  return data
})

const initialState = {
  docs: {
    items: [],
    status: 'loading'
  },
  labs: {
    items: [],
    status: 'loading'
  },
  video: {
    items: [],
    status: 'loading'
  },
  deleteStatus: 'loading'
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {

  },
  extraReducers: {
    [fetchDocsPosts.pending]: (state) => {
      state.docs.status = 'loading'
    },
    [fetchDocsPosts.fulfilled]: (state, action) => {
      state.docs.items = action.payload
      state.docs.status = 'loaded'
    },
    [fetchDocsPosts.rejected]: (state) => {
      state.docs.items = []
      state.docs.status = 'error'
    },
    [fetchLabsPosts.pending]: (state) => {
      state.labs.status = 'loading'
    },
    [fetchLabsPosts.fulfilled]: (state, action) => {
      state.labs.items = action.payload
      state.labs.status = 'loaded'
    },
    [fetchLabsPosts.rejected]: (state) => {
      state.labs.items = []
      state.labs.status = 'error'
    },
    [fetchVideoPosts.pending]: (state) => {
      state.video.status = 'loading'
    },
    [fetchVideoPosts.fulfilled]: (state, action) => {
      state.video.items = action.payload
      state.video.status = 'loaded'
    },
    [fetchVideoPosts.rejected]: (state) => {
      state.video.items = []
      state.video.status = 'error'
    },
    [fetchRemovePost.pending]: (state) => {
      state.deleteStatus = 'loading'
    },
    [fetchRemovePost.fulfilled]: (state, action) => {
      state.docs.items = state.docs.items.filter(obj => obj._id !== action.payload._id)
      state.labs.items = state.labs.items.filter(obj => obj._id !== action.payload._id)
      state.video.items = state.video.items.filter(obj => obj._id !== action.payload._id)
      state.deleteStatus = 'loaded'
    },
  }
})


export const postsReducer = postsSlice.reducer
