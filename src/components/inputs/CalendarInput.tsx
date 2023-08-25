import React, { useRef, useState } from 'react'
import { View, Pressable, TextInput as NativeInput } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'
import { Portal } from '@gorhom/portal'
import { format } from 'date-fns'
import TextInput from '@/components/inputs/TextInput'
import FullscreenCalendar from '@/components/calendar/FullscreenCalendar'
import { StartEndDates } from '@/types/dates'

const FALLBACK_SELECTED = {
  startDate: format(new Date(), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
}

function CalendarInput() {
  const [showCalendar, setShowCalendar] = useState(false)
  const startRef = useRef<NativeInput>(null)
  const endRef = useRef<NativeInput>(null)
  const [dates, setDates] = useState<StartEndDates>()

  function blurInputs() {
    startRef.current?.blur()
    endRef.current?.blur()
  }

  function handleCancel() {
    blurInputs()
    setShowCalendar(false)
  }

  function handleAddDates(startDate: string, endDate: string) {
    blurInputs()
    setShowCalendar(false)
    setDates({
      startDate,
      endDate,
    })
  }

  return (
    <>
      <View className="w-full">
        <Pressable className="w-full flex flex-row justify-center">
          <View className="w-1/2">
            <TextInput
              ref={startRef}
              placeholder="Start date"
              onFocus={() => setShowCalendar(true)}
              value={dates?.startDate || ''}
            />
          </View>
          <View className="w-1/2">
            <TextInput
              ref={endRef}
              placeholder="End date"
              onFocus={() => setShowCalendar(true)}
              value={dates?.endDate || ''}
            />
          </View>
        </Pressable>
      </View>
      {showCalendar && (
        <Portal>
          <FullWindowOverlay>
            <FullscreenCalendar
              onCancel={handleCancel}
              onAddDates={handleAddDates}
              selectedDates={dates || FALLBACK_SELECTED}
            />
          </FullWindowOverlay>
        </Portal>
      )}
    </>
  )
}

export default CalendarInput
