import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Portal } from '@gorhom/portal'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import cn from 'classnames'
import FullscreenOverlay from '@/components/overlay/FullscreenOverlay'
import { AlertAction, AlertActionType } from '@/types/alert'

interface Props {
  title?: string
  message?: string
  footnote?: string
  actions: AlertAction[]
  floatingActions?: AlertAction[]
  show: boolean
}

const ANIM_OPTIONS = {
  velocity: 2.5,
}

function Alert(props: Props) {
  const { title, message, footnote, actions, floatingActions, show } = props

  const [visible, setVisible] = useState(false)
  const opacity = useSharedValue(0)

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
      <FullscreenOverlay>
        <Animated.View
          className="w-full h-full flex items-center justify-center bg-tuatura/70"
          style={{ opacity }}
        >
          <View className="w-72">
            <View className="bg-tuatura/95 w-full rounded-xl">
              <View className="p-4">
                {title && (
                  <Text className="font-mont-medium text-ghost w-full text-center mb-1 text-lg">
                    {title}
                  </Text>
                )}

                {message && (
                  <Text className="font-mont text-ghost w-full text-center">
                    {message}
                  </Text>
                )}

                {footnote && (
                  <Text
                    className={cn(
                      'font-mont text-ghost/60 text-xs text-center -mb-2',
                      message && 'mt-3',
                    )}
                  >
                    {footnote}
                  </Text>
                )}
              </View>
              {actions.map((action, index) => (
                <Pressable
                  key={index}
                  onPress={action.onPress}
                  className={cn(
                    'mt-2 border-t border-ghost/20 w-full pt-3 pb-1',
                    index === actions.length - 1 && 'py-3',
                  )}
                >
                  <Text
                    className={cn(
                      'font-mont-medium text-helio w-full text-center text-lg',
                      action.type === AlertActionType.DANGER &&
                        'text-watermelon',
                    )}
                  >
                    {action.text}
                  </Text>
                </Pressable>
              ))}
            </View>
            {floatingActions?.map((action, index) => (
              <Pressable
                key={index}
                onPress={action.onPress}
                className={cn(
                  'bg-tuatura/95 w-full pt-3 pb-1',
                  floatingActions.length === 1 && 'rounded-xl pb-3',
                  floatingActions.length !== 1 && 'py-3',
                  index === 0 && 'mt-2 rounded-t-xl',
                  index !== 0 && 'border-t border-ghost/20',
                  index === floatingActions.length - 1 && 'rounded-b-xl',
                )}
              >
                <Text
                  className={cn(
                    'font-mont-medium text-helio w-full text-center text-lg',
                    action.type === AlertActionType.DANGER && 'text-watermelon',
                  )}
                >
                  {action.text}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </FullscreenOverlay>
    </Portal>
  )
}

export default Alert
