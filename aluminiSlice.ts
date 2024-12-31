import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AlumniState {
  data: Alumni | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

interface Alumni {
  id: string
  name: string
  email: string
  avatar: string
  linkedin: string
  company: string
  experience: string
  blogs: Blog[]
  internships: Internship[]
}

interface Blog {
  id: number
  title: string
  content: string
  url: string
}

interface Internship {
  id: number
  company: string
  duration: string
}

const initialState: AlumniState = {
  data: null,
  status: 'idle',
  error: null,
}

export const fetchAlumniData = createAsyncThunk('alumni/fetchAlumniData', async () => {
  // In a real application, this would be an API call
  const response = await new Promise<Alumni>((resolve) => 
    setTimeout(() => resolve({
      id: "ALU001",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/johndoe",
      company: "Tech Giants Inc.",
      experience: "3 years",
      blogs: [
        { id: 1, title: "My Journey in Tech", content: "This is my journey in tech...", url: "#" },
        { id: 2, title: "Mastering React Hooks", content: "React Hooks are...", url: "#" }
      ],
      internships: [
        { id: 1, company: "Startup XYZ", duration: "3 months" },
        { id: 2, company: "Big Corp", duration: "6 months" }
      ]
    }), 1000)
  )
  return response
})

export const updateAlumniData = createAsyncThunk(
  'alumni/updateAlumniData',
  async (updatedData: Partial<Alumni>, { getState }) => {
    const state = getState() as RootState
    const currentData = state.alumni.data
    if (!currentData) throw new Error("No alumni data to update")
    
    // In a real application, this would be an API call
    const response = await new Promise<Alumni>((resolve) =>
      setTimeout(() => resolve({ ...currentData, ...updatedData }), 1000)
    )
    return response
  }
)

const alumniSlice = createSlice({
  name: 'alumni',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlumniData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAlumniData.fulfilled, (state, action: PayloadAction<Alumni>) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchAlumniData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch alumni data'
      })
      .addCase(updateAlumniData.fulfilled, (state, action: PayloadAction<Alumni>) => {
        state.data = action.payload
      })
  },
})

export default alumniSlice.reducer

