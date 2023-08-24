import React, { Ref, forwardRef, useState } from 'react'
import { TextInput as NativeInput, View, KeyboardTypeOptions, Pressable } from 'react-native'
import cn from 'classnames'
import EyeIcon from '@/assets/icons/eye.svg'
import EyeSlashIcon from '@/assets/icons/eye-slash.svg'

interface Props {
  placeholder?: string
  value?: string
  type?: 'password' | KeyboardTypeOptions
  className?: string
  onFocus?: () => void
  onBlur?: () => void
  onChangeText?: (text: string) => void
}

function TextInput(props: Props, ref: Ref<NativeInput>) {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    if (props.type !== 'password') return

    setShowPassword(!showPassword)
  }

  return  (
    <View className={cn('relative w-full', props.className)}>
      <NativeInput
        className='w-full p-2 text-ghost border-b border-ghost rounded-md'
        placeholder={props.placeholder}
        placeholderTextColor='#f4f4f5'
        keyboardType={props.type === 'password' ? 'default' : props.type}
        secureTextEntry={props.type === 'password' && showPassword}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChangeText={props.onChangeText}
        ref={ref}
        value={props.value}
      />
      {props.type === 'password' && (
        <Pressable
          onPress={handleShowPassword}
          className='absolute right-2 bottom-2'
        >
          {showPassword ? <EyeSlashIcon fill="#fff"/> : <EyeIcon fill='#fff'/>}
        </Pressable>
      )}
    </View>
  )
}

export default forwardRef(TextInput)
