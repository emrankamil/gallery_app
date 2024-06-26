import React from 'react'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { sub } from 'date-fns';
import axios from 'axios'

const post_url = 'https://jsonplaceholder.org/posts'

const initialState = {
  posts : [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(post_url)
  return response.data
}
)

export const addNewPost = createAsyncThunk('posts/addNewPost', async () => {
  const response = await axios.post(post_url)
  return response.data
})

const postSlice = createSlice({
    initialState,
    name: 'posts',
    reducers:{
      postAdded: {
        reducer(state, action){
            state.posts.push(action.payload)     
        },
        prepare(title, content, userId){
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }
          }
      },
      reactionAdded: {
        reducer: (state, action) => {
          const { postId, reaction } = action.payload
          const existingPost = state.posts.find(post => post.id === postId)
          if (existingPost) {
            existingPost.reactions[reaction]++
          }
        }
      }
    },
    extraReducers(builder) {
      builder
          .addCase(fetchPosts.pending, (state, action) => {
              state.status = 'loading'
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
              state.status = 'succeeded'
              // Adding date and reactions
              let min = 1;
              const loadedPosts = action.payload.map(post => {
                  post.date = sub(new Date(), { minutes: min++ }).toISOString();
                  post.reactions = {
                      thumbsUp: 0,
                      wow: 0,
                      heart: 0,
                      rocket: 0,
                      coffee: 0
                  }
                  return post;
              });
              state.posts = state.posts.concat(loadedPosts)
          })
          .addCase(fetchPosts.rejected, (state, action) => {
              state.status = 'failed'
              state.error = action.error.message
          })
          .addCase(addNewPost.fulfilled, (state, action) => {
            // Fix for API post IDs:
            // Creating sortedPosts & assigning the id 
            // would be not be needed if the fake API 
            // returned accurate new post IDs
            const sortedPosts = state.posts.sort((a, b) => {
                if (a.id > b.id) return 1
                if (a.id < b.id) return -1
                return 0
            })
            action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
            // End fix for fake API post IDs 

            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0
            }
            console.log(action.payload)
            state.posts.push(action.payload)
        })
      },
}
)

export const { postAdded, reactionAdded } = postSlice.actions
export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error
export default postSlice.reducer
