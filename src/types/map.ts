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

export interface SearchResult {
  addresstype: string
  boundingbox: string[]
  class: string
  display_name: string
  importance: number
  lat: string
  licence: string
  lon: string
  name: string
  osm_id: number
  osm_type: string
  place_id: number
  place_rank: number
  type: string
}
