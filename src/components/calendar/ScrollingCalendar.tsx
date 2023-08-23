import React from 'react'
import { DateData, CalendarList as RNCalendarList } from 'react-native-calendars'

interface Props {
  selectedDate?: string
  onDayPress?: (day: DateData) => void
}

function ScrollingCalendar(props: Props) {
  return (
    <RNCalendarList
      onDayPress={props.onDayPress}
      hideDayNames
      firstDay={1}
      theme={{
        backgroundColor: '#242423',
        calendarBackground: '#242423',
        dayTextColor: '#ffffff',
        monthTextColor: '#D4ABEF',
      }}
      // markedDates={{
      //   [selected]: {selected: true, disableTouchEvent: true},
      // }}
    />
  )
}

export default ScrollingCalendar
