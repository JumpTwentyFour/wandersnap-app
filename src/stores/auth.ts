import { StoreApi, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@env'

interface AuthState {
  authenticated: boolean
  user?: {
    id: string
    name: string
    email: string
  }

  login: (content: LoginContent) => void
  register: (content: RegisterContent) => void
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

type Set<T> = StoreApi<T>['setState']

const store = (set: Set<AuthState>): AuthState => {
  async function login(content: LoginContent) {
    const { email, password, deviceName } = content

    if (!email || !password || !deviceName) {
      console.log('email, password, deviceName is required')
      return
    }

    try {
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

      const data = await response.json()

      console.log(data)

      set({
        authenticated: true,
      })
    } catch (error) {
      set({
        authenticated: false,
      })
    }
  }

  async function register(content: RegisterContent) {
    const { name, email, password, deviceName } = content

    if (!name || !email || !password || !deviceName) {
      console.log('name, email, password, deviceName is required')
      return
    }

    try {
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

      const data = await response.json()

      console.log(data)

      set({
        authenticated: true,
      })
    } catch (error) {
      set({
        authenticated: false,
      })
    }
  }

  return {
    authenticated: false,
    user: undefined,

    login,
    register,
  }
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(store, {
      name: 'auth-store',
      getStorage: () => AsyncStorage,
    }),
  ),
)

export default useAuthStore
