import React, { useRef, useState } from 'react'
import { View, Pressable } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'
import { Portal } from '@gorhom/portal'
import TextInput from '@/components/inputs/TextInput'
import FullscreenCalendar from '@/components/calendar/FullscreenCalendar'
import { TextInput as NativeInput } from 'react-native'

function CalendarInput() {
  const [showCalendar, setShowCalendar] = useState(false)
  const startRef = useRef<NativeInput>(null)
  const endRef = useRef<NativeInput>(null)

  function handleCancel() {
    startRef.current?.blur()
    endRef.current?.blur()

    setShowCalendar(false)
  }

  return (
    <>
      <View className='w-full'>
        <Pressable className='w-full flex flex-row justify-center'>
          <View className='w-1/2'>
            <TextInput ref={startRef} placeholder='Start date' onFocus={() => setShowCalendar(true)} />
          </View>
          <View className='w-1/2'>
            <TextInput ref={endRef} placeholder='End date' onFocus={() => setShowCalendar(true)} />
          </View>
        </Pressable>
      </View>
      {showCalendar && (
        <Portal>
          <FullWindowOverlay>
            <FullscreenCalendar onCancel={handleCancel} onAddDates={(...dates) => console.log(dates)} />
          </FullWindowOverlay>
        </Portal>
      )}
    </>
  )
}

export default CalendarInput
