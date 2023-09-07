import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { API_URL } from '@env'

interface AuthState {
  authenticated: boolean
  user?: {
    id: string
    name: string
    email: string
  }

  login: (content: LoginContent) => void
}

interface LoginContent {
  email: string
  password: string
  deviceName: string
}

interface RegisterContent {
  name: string
  email: string
  password: string
  deviceName: string
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        authenticated: true,
        user: undefined,

        login: async (content: LoginContent) => {
          const { email, password, deviceName } = content

          if (!email || !password || !deviceName) {
            console.log('email, password, deviceName is required')
            return
          }

          const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
              device_name: deviceName,
            }),
          })

          console.log(response)
        },

        register: async (content: RegisterContent) => {
          const { name, email, password, deviceName } = content

          if (!name || !email || !password || !deviceName) {
            console.log('name, email, password, deviceName is required')
            return
          }

          const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
              device_name: deviceName,
            }),
          })

          console.log(response)
          set({ authenticated: true })
        },
      }),
      {
        name: 'auth-store',
      },
    ),
  ),
)

export default useAuthStore
