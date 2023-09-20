import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, ViewProps } from 'react-native'
import { Portal } from '@gorhom/portal'
import BSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useColours } from '@/hooks/useTailwind'

interface Props {
  open?: boolean
  children: React.ReactNode
  setSnapPointIndex: React.Dispatch<React.SetStateAction<number>>
}

function BottomSheet(props: Props) {
  const { open, children, setSnapPointIndex } = props

  const colours = useColours()

  const sheetRef = useRef<BSheet>(null)
  const snapPoints = useMemo(() => ['10%', '70%'], [])

  useEffect(() => {
    if (open) return

    sheetRef.current?.close()
  }, [open])

  const handleSheetChanges = useCallback((index: number) => {
    setSnapPointIndex(index)
  }, [])

  return (
    <Portal>
      <BSheet
        index={open ? 0 : -1}
        ref={sheetRef}
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: colours.tuatura,
        }}
        handleIndicatorStyle={{
          backgroundColor: colours.ghost,
        }}
        backgroundStyle={{
          backgroundColor: colours.tuatura,
        }}
        backgroundComponent={({ pointerEvents, style }) => (
          <Background pointerEvents={pointerEvents} style={style} />
        )}
        onChange={handleSheetChanges}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BSheet>
    </Portal>
  )
}

function Background(props: {
  pointerEvents: ViewProps['pointerEvents']
  style: ViewProps['style']
}) {
  return (
    <View
      className="relative overflow-hidden rounded-3xl"
      pointerEvents={props.pointerEvents}
      accessible={true}
      accessibilityRole="adjustable"
      accessibilityLabel="Bottom Sheet"
      style={[props.style]}
    >
      <View className="w-full h-full bg-tuatura" />
    </View>
  )
}

export default BottomSheet
