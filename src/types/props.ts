import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/types/navigator'

export type SetupProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>
