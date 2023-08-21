import React, { useState } from 'react'
import { View, Pressable } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'
import { Portal } from '@gorhom/portal'
import TextInput from '@/components/inputs/TextInput'
import FullscreenCalendar from '@/components/calendar/FullscreenCalendar'

function CalendarInput() {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <>
      <View className='w-full'>
        <Pressable className='w-full flex flex-row justify-center'>
          <View className='w-1/2'>
            <TextInput placeholder='Start date' onFocus={() => setShowCalendar(true)} />
          </View>
          <View className='w-1/2'>
            <TextInput placeholder='End date' onFocus={() => setShowCalendar(true)} />
          </View>
        </Pressable>
      </View>
      {showCalendar && (
        <Portal>
          <FullWindowOverlay>
            <FullscreenCalendar />
          </FullWindowOverlay>
        </Portal>
      )}
    </>
  )
}

export default CalendarInput
