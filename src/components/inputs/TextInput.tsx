import React, { useState } from 'react'
import { TextInput as NativeInput, View, KeyboardTypeOptions } from 'react-native'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlashIcon from '../../assets/icons/eye-slash.svg'
import { Pressable } from 'react-native'

interface Props {
  placeholder?: string
  type?: 'password' | KeyboardTypeOptions
}

function TextInput(props: Props) {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    if (props.type !== 'password') return

    setShowPassword(!showPassword)
  }

  return  (
    <View className='relative'>
      <NativeInput
        className='w-full border-b border-white rounded-md p-2 text-white'
        placeholder={props.placeholder}
        placeholderTextColor='#f4f4f5'
        keyboardType={props.type === 'password' ? 'default' : props.type}
        secureTextEntry={props.type === 'password' && showPassword}
      />
      {props.type === 'password' && (
        <Pressable
          onPress={handleShowPassword}
          className='absolute right-2 bottom-2'
        >
          {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
        </Pressable>
      )}
    </View>
  )
}

export default TextInput
