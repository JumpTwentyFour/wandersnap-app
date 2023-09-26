import { StoreApi, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@env'

type AuthResponse = {
  success: boolean
  message: string
  errors?: { [key: string]: string }
}
interface AuthState {
  authenticated: boolean
  user?: {
    id: string
    name: string
    email: string
  }

  login: (content: LoginContent) => Promise<AuthResponse>
  register: (content: RegisterContent) => Promise<AuthResponse>
  logout(): Promise<void>
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
  async function login(content: LoginContent): Promise<AuthResponse> {
    const { email, password, deviceName } = content

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          device_name: deviceName,
        }),
      })

      const data = await response.json()

      console.log(data)

      if (response.ok) {
        AsyncStorage.setItem('token', data.token)
        set({
          authenticated: true,
        })

        return {
          success: true,
          message: data.message,
        }
      } else {
        return {
          success: false,
          errors: data.errors,
          message: data.message,
        }
      }
    } catch (error) {
      set({
        authenticated: false,
      })
      return {
        success: false,
        message: 'An error occurred while logging in',
      }
    }
  }

  async function register(content: RegisterContent): Promise<AuthResponse> {
    const { name, email, password, deviceName } = content

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          device_name: deviceName,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        AsyncStorage.setItem('token', data.token)
        set({
          authenticated: true,
        })
        return { success: true, message: data.message }
      } else {
        return { success: false, message: data.message, errors: data.errors }
      }
    } catch (error) {
      set({
        authenticated: false,
      })

      return {
        success: false,
        message: 'Invalid credentials',
      }
    }
  }
  async function logout() {
    await AsyncStorage.removeItem('token').then(() => {
      set({
        authenticated: false,
      })
    })
  }

  return {
    authenticated: false,
    user: undefined,

    login,
    register,
    logout,
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
