import React, { useEffect, useMemo, useRef } from 'react'
import { View, ViewProps } from 'react-native'
import { BlurView } from 'expo-blur'
import { Portal } from '@gorhom/portal'
import BSheet from '@gorhom/bottom-sheet'

interface Props {
  open?: boolean
  children: React.ReactNode
}

function BottomSheet(props: Props) {
  const { open, children } = props

  const sheetRef = useRef<BSheet>(null)

  const snapPoints = useMemo(() => ['10%', '70%'], [])

  useEffect(() => {
    if (!open) {
      sheetRef.current?.close()
    }
  }, [open])

  return (
    <Portal>
      <BSheet
        index={open ? 0 : -1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundComponent={({pointerEvents, style}) => <Background pointerEvents={pointerEvents} style={style} />}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        {children}
      </BSheet>
    </Portal>
  )
}

function Background(props: { pointerEvents: ViewProps['pointerEvents'], style: ViewProps['style'] }) {
  return (
    <View className='rounded-3xl overflow-hidden relative' pointerEvents={props.pointerEvents}
      accessible={true}
      accessibilityRole="adjustable"
      accessibilityLabel="Bottom Sheet"
      style={[props.style]}

    >
      <BlurView className='bg-tuatura/90 w-full h-full blur'/>
    </View>
  )
}

export default BottomSheet
