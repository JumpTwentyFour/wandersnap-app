import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { DateData } from 'react-native-calendars'
import { format, eachDayOfInterval } from 'date-fns'
import ScrollingCalendar from '@/components/calendar/ScrollingCalendar'
import Button from '@/components/pressables/Button'
import Icon from '@/components/Icon/Icon'
import { StartEndDates } from '@/types/dates'
import { ButtonType, ButtonVariant } from '@/types/button'
import { IconSize } from '@/types/icon'
import { WhichPress } from '@/types/calendar'

interface Props {
  onCancel: () => void
  onAddDates: (startDate: string, endDate: string) => void
  selectedDates?: StartEndDates
}

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function FullscreenCalendar(props: Props) {
  const { onCancel, onAddDates, selectedDates } = props

  const [whichPress, setWhichPress] = useState<WhichPress>(WhichPress.Start)
  const [startDate, setStartDate] = useState<string | undefined>()
  const [endDate, setEndDate] = useState<string | undefined>()
  
  const formattedStartDate = useMemo(() => {
    if (!startDate) return undefined

    return format(new Date(startDate), 'dd MMM yyyy')
  }, [startDate])

  const formattedEndDate = useMemo(() => {
    if (!endDate) return undefined

    return format(new Date(endDate), 'dd MMM yyyy')
  }, [endDate])

  const minDate = useMemo(() => {
    if (!startDate || (startDate && endDate)) return

    return startDate
  }, [startDate, endDate])

  const selectedDateRange = useMemo(() => {
    if (!startDate) return []

    if (!endDate) return [startDate]

    const dates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    })

    return dates.map(date => format(date, 'yyyy-MM-dd'))
  }, [startDate, endDate])

  function handleDayPress(day: DateData) {
    if (whichPress === WhichPress.Start) {
      setStartDate(day.dateString)
      setEndDate(undefined)
      setWhichPress(WhichPress.End)
      return
    }
    
    if (whichPress === WhichPress.End) {
      setEndDate(day.dateString)
      setWhichPress(WhichPress.Start)
    }
  }

  function handleAddDates() {
    if (!startDate) return

    if (!endDate) {
      onAddDates(startDate, startDate)
      return
    }

    onAddDates(startDate, endDate)
  }

  useEffect(() => {
    setStartDate(selectedDates?.startDate)
    setEndDate(selectedDates?.endDate)
  }, [selectedDates])

  return (
    <View className='bg-[#242423] w-full h-full relative'>
      <View className='h-16' />
      <View className='h-30'>
        <View className='flex flex-row w-full justify-center items-center mb-5'>
          <View className='w-40 px-4'>
            <Text className='text-white'>Start date</Text>
            <Text className='text-white text-xl mt-2 h-8'>{formattedStartDate}</Text>
          </View>
          <View className='w-10 flex items-center'>
            <Icon name='ArrowRight' size={IconSize.Small} colour='#fff' />
          </View>
          <View className='w-40 px-4'>
            <Text className='text-white'>End date</Text>
            <Text className='text-white text-xl mt-2 h-8'>{formattedEndDate}</Text>
          </View>
        </View>
        <View className='border-t border-b border-[#F9F8FF4D] h-12 w-full flex flex-row justify-around items-center px-5'>
          {DAYS_OF_WEEK.map(day => <Text className='text-white text-xs' key={day}>{day}</Text>)}
        </View>
      </View>
      <View style={{ height: Dimensions.get('window').height - 280 }}>
        <ScrollingCalendar onDayPress={handleDayPress} minDate={minDate} selectedDates={selectedDateRange} />
      </View>

      <View className='bg-[#7E5BFF] h-24 flex flex-row justify-around items-center pb-3'>
        <Button label='Cancel' onPress={onCancel} type={ButtonType.Outline} variant={ButtonVariant.Secondary} />
        <Button label='Add dates' onPress={handleAddDates} type={ButtonType.Solid} variant={ButtonVariant.Secondary} />
      </View>
    </View>
  )
}

export default FullscreenCalendar
