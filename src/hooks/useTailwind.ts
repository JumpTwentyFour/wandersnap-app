import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config.js'
import { AppColours } from '@/types/colours'

export default function useTailwind() {
  return resolveConfig(tailwindConfig)
}

export function useColours() {
  return useTailwind()?.theme?.colors as unknown as AppColours
}
