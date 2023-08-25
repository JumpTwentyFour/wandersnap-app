import { FC, SVGProps } from 'react'

export type IconType = FC<SVGProps<SVGSVGElement>>

export interface IconMap {
  [key: string]: {
    default: IconType
  }
}

export enum IconSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export interface IconProps {
  size: IconSize
  name: string
  colour: string
}
