export interface MapRegion {
  latitude: number
  latitudeDelta: number
  longitude: number
  longitudeDelta: number
}

export interface MapCoordinate {
  latitude: number
  longitude: number
}

export enum MarkerSize {
  SMALL = 'sm',
  LARGE = 'lg',
}

export interface MapMarker {
  key: string
  title?: string
  description?: string
  coordinate: MapCoordinate
  size: MarkerSize
}
