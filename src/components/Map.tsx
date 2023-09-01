import React from 'react'
import { View } from 'react-native'
import MapView, { Marker, UrlTile, PROVIDER_GOOGLE } from 'react-native-maps'
import { MapRegion, MapMarker } from '@/types/map'
import MarkerImages from '@/assets/map'

interface Props {
  markers?: MapMarker[]
  initialRegion?: MapRegion
}

function Map(props: Props) {
  const { markers, initialRegion } = props

  return (
    <View className="flex">
      <MapView
        provider={PROVIDER_GOOGLE}
        className="w-full h-full"
        onRegionChange={(event) => console.log(event)}
        initialRegion={initialRegion}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker.key}
            title={marker.title}
            description={marker.description}
            coordinate={marker.coordinate}
            image={MarkerImages[marker.size]}
          />
        ))}
        <UrlTile urlTemplate="http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      </MapView>
    </View>
  )
}

export default Map
