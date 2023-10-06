import React, { useRef, useState } from 'react'
import { View, Pressable, TextInput as NativeInput } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'
import { Portal } from '@gorhom/portal'
import { format } from 'date-fns'
import TextInput from '@/components/inputs/TextInput'
import FullscreenCalendar from '@/components/calendar/FullscreenCalendar'
import { StartEndDates } from '@/types/dates'
import useOverlayStore from '@/stores/overlay'

const FALLBACK_SELECTED = {
  startDate: format(new Date(), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
}

type CalendarInputProps = {
  setFormDates: ({
    startDate,
    endDate,
  }: {
    startDate: string
    endDate: string
  }) => void
  startDateError?: string
  endDateError?: string
}

function CalendarInput(props: CalendarInputProps) {
  const { setFormDates } = props
  const [showCalendar, setShowCalendar] = useState(false)
  const [dates, setDates] = useState<StartEndDates>()

  const startRef = useRef<NativeInput>(null)
  const endRef = useRef<NativeInput>(null)

  const overlay = useOverlayStore()

  function blurInputs() {
    startRef.current?.blur()
    endRef.current?.blur()
  }

  function handleCancel() {
    blurInputs()
    setVisibility(false)
  }

  function handleAddDates(startDate: string, endDate: string) {
    blurInputs()
    setVisibility(false)
    setDates({
      startDate,
      endDate,
    })
    setFormDates({ startDate, endDate })
  }

  function setVisibility(show: boolean) {
    setShowCalendar(show)
    overlay.setShowStatusBar(!show)
  }

  return (
    <>
      <View className="w-full">
        <Pressable className="flex flex-row justify-center w-full">
          <View className="w-1/2 pr-2">
            <TextInput
              ref={startRef}
              placeholder="Start date"
              error={props.startDateError}
              onFocus={() => setVisibility(true)}
              value={dates?.startDate || ''}
            />
          </View>
          <View className="w-1/2 pl-2">
            <TextInput
              ref={endRef}
              placeholder="End date"
              error={props.endDateError}
              onFocus={() => setVisibility(true)}
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
