import React, { useMemo } from 'react'
import { DateData, CalendarList as RNCalendarList, CalendarProps } from 'react-native-calendars'
import type { MarkingProps } from 'react-native-calendars/src/calendar/day/marking'

interface Props {
  selectedDates?: string[]
  onDayPress?: (day: DateData) => void
  minDate?: string
  initialDate?: string
}

const DAY_OPTIONS: MarkingProps = {
  selected: true,
  color: '#7E5BFF',
}

function ScrollingCalendar(props: Props) {
  const markedDates = useMemo(() => {
    if (!props.selectedDates) return

    return props.selectedDates.reduce((acc: CalendarProps['markedDates'], date) => {
      const isFirst = props.selectedDates?.[0] === date
      const isLast = props.selectedDates?.[props.selectedDates.length - 1] === date
      const isSingular = props.selectedDates?.length === 1

      if (!acc) return acc

      if (isSingular) {
        acc[date] = {
          ...DAY_OPTIONS,
          startingDay: true,
          endingDay: true,
        }

        return acc
      }

      if (isFirst) {
        acc[date] = {
          ...DAY_OPTIONS,
          startingDay: true,
        }

        return acc
      }
      
      if (isLast) {
        acc[date] = {
          ...DAY_OPTIONS,
          endingDay: true,
        }

        return acc
      }

      acc[date] = DAY_OPTIONS
    
      return acc

    }, {})
  }, [props.selectedDates])

  return (
    <RNCalendarList
      onDayPress={props.onDayPress}
      minDate={props.minDate}
      hideDayNames
      firstDay={1}
      initialDate={props.initialDate}
      theme={{
        backgroundColor: '#242423',
        calendarBackground: '#242423',
        dayTextColor: '#ffffff',
        monthTextColor: '#D4ABEF',
        textDisabledColor: '#F9F8FF4D',
      }}
      markingType='period'
      markedDates={{
        ...markedDates,
      }}
    />
  )
}

export default ScrollingCalendar
