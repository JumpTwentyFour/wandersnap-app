import React from 'react'
import { Text } from 'react-native'

interface DashboardHeaderProps {
  children: React.ReactNode
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  return (
    <Text className='text-3xl text-white font-mont'>
      {props.children}
    </Text>
  )
}

export default DashboardHeader
