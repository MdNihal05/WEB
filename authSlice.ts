import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

interface User {
  id: string
  name: string
  email: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    // In a real application, this would be an API call
    const response = await new Promise<User>((resolve, reject) =>
      setTimeout(() => {
        if (email === 'john.doe@example.com' && password === 'password') {
          resolve({ id: 'ALU001', name: 'John Doe', email: 'john.doe@example.com' })
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    )
    return response
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  // In a real application, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded'
        state.isAuthenticated = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to login'
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false
        state.user = null
      })
  },
})

export default authSlice.reducer

