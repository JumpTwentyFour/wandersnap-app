import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Platform } from 'react-native'
import { Portal } from '@gorhom/portal'
import { FullWindowOverlay } from 'react-native-screens'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import cn from 'classnames'
import { BlurView } from 'expo-blur'

interface AlertAction {
  text: string
  onPress: () => void
}

interface Props {
  title: string
  message: string
  actions: AlertAction[]
  show: boolean
}

const ANIM_OPTIONS = {
  velocity: 2.5,
}

function Alert(props: Props) {
  const { title, message, actions, show } = props

  const [visible, setVisible] = useState(false)
  const opacity = useSharedValue(0)

  const Overlay = Platform.OS === 'ios' ? FullWindowOverlay : BlurView

  useEffect(() => {
    if (show) {
      setVisible(true)
      opacity.value = withSpring(1, ANIM_OPTIONS)

      return
    }

    opacity.value = withSpring(0, ANIM_OPTIONS)

    setTimeout(() => {
      setVisible(false)
    }, ANIM_OPTIONS.velocity * 100)
  }, [show])

  if (!visible) return null

  return (
    <Portal>
      <Overlay className="bg-tuatura/40">
        <Animated.View
          className="w-full h-full flex items-center justify-center"
          style={{ opacity }}
        >
          <View className="bg-tuatura/95 w-72 rounded-xl">
            <View className="p-4">
              <Text className="font-mont-medium text-ghost w-full text-center mb-1 text-lg">
                {title}
              </Text>
              <Text className="font-mont text-ghost w-full text-center">
                {message}
              </Text>
            </View>
            {actions.map((action, index) => (
              <Pressable
                key={index}
                className={cn(
                  'mt-2 border-t border-ghost/20 w-full pt-3 pb-1',
                  index === actions.length - 1 && 'py-3',
                )}
                onPress={action.onPress}
              >
                <Text className="font-mont-medium text-helio w-full text-center text-lg">
                  {action.text}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </Overlay>
    </Portal>
  )
}

export default Alert
