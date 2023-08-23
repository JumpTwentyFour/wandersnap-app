import React, { useMemo, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { DateData } from 'react-native-calendars'
import { format } from 'date-fns'
import ScrollingCalendar from '@/components/calendar/ScrollingCalendar'
import Button from '../pressables/Button'

enum WhichPress {
  Start = 'start',
  End = 'end',
}

interface Props {
  onCancel: () => void
  onAddDates: (startDate: string, endDate: string) => void
}

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function FullscreenCalendar(props: Props) {
  const { onCancel, onAddDates } = props

  const [whichPress, setWhichPress] = useState<WhichPress>(WhichPress.Start)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  
  const formattedStartDate = useMemo(() => {
    if (!startDate) return null

    return format(new Date(startDate), 'dd MMM yyyy')
  }, [startDate])

  const formattedEndDate = useMemo(() => {
    if (!endDate) return null

    return format(new Date(endDate), 'dd MMM yyyy')
  }, [endDate])

  function handleDayPress(day: DateData) {
    if (whichPress === WhichPress.Start) {
      console.log('start date', day)
      setStartDate(day.dateString)
      setEndDate(null)
      setWhichPress(WhichPress.End)
      return
    }
    
    if (whichPress === WhichPress.End) {
      console.log('end date', day)
      setEndDate(day.dateString)
      setWhichPress(WhichPress.Start)
    }
  }

  function handleAddDates() {
    if (!startDate || !endDate) return

    onAddDates(startDate, endDate)
  }

  return (
    <View className='bg-[#242423] w-full h-full relative'>
      <View className='h-16' />
      <View className='h-30'>
        <View className='flex flex-row w-full justify-around mb-5'>
          <View>
            <Text className='text-white'>Start date</Text>
            <Text className='text-white text-xl mt-2 h-8'>{formattedStartDate}</Text>
          </View>
          <View>
            <Text className='text-white'>End date</Text>
            <Text className='text-white text-xl mt-2 h-8'>{formattedEndDate}</Text>
          </View>
        </View>
        <View className='border-t border-b border-[#F9F8FF4D] h-12 w-full flex flex-row justify-around items-center px-5'>
          {DAYS_OF_WEEK.map(day => <Text className='text-white text-xs' key={day}>{day}</Text>)}
        </View>
      </View>

      <View style={{ height: Dimensions.get('window').height - 280 }}>
        <ScrollingCalendar onDayPress={handleDayPress} />
      </View>

      <View className='bg-purple-500 h-24 flex flex-row justify-around items-center pb-3'>
        <Button label='Cancel' onPress={onCancel} type='outline' variant='secondary' />
        <Button label='Add dates' onPress={handleAddDates} type='solid' variant='secondary' />
      </View>
    </View>
  )
}

export default FullscreenCalendar
