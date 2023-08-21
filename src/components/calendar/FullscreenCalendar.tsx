import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import ScrollingCalendar from '@/components/calendar/ScrollingCalendar'
import { DateData } from 'react-native-calendars'

enum WhichPress {
  Start = 'start',
  End = 'end',
}

function FullscreenCalendar() {
  const [whichPress, setWhichPress] = useState<WhichPress>(WhichPress.Start)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)

  function handleDayPress(day: DateData) {
    if (whichPress === WhichPress.Start) {
      console.log('start date', day)
      setStartDate(day.dateString)
      setWhichPress(WhichPress.End)
      return
    }
    
    if (whichPress === WhichPress.End) {
      console.log('end date', day)
      setEndDate(day.dateString)
      setWhichPress(WhichPress.Start)
    }
  }

  return (
    <View className='bg-[#242423] w-full h-full relative'>
      <View className='h-16' />
      <View className='flex flex-row w-full justify-around'>
        <View>
          <Text className='text-white'>Start date</Text>
          <Text className='text-white'>{startDate}</Text>
        </View>
        <View>
          <Text className='text-white'>End date</Text>
          <Text className='text-white'>{endDate}</Text>
        </View>
      </View>

      <View style={{ height: Dimensions.get('window').height - 160 }}>
        <ScrollingCalendar onDayPress={handleDayPress} />
      </View>

      <View className='bg-purple-500 h-16'></View>
    </View>
  )
}

export default FullscreenCalendar
