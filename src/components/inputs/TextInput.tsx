import React from 'react'
import { TextInput as NativeInput } from 'react-native'

interface Props {
  placeholder?: string
}

function TextInput(props: Props) {
  return  (
    <NativeInput
      className='w-full border-b border-white rounded-md p-2 text-white'
      placeholder={props.placeholder}
      placeholderTextColor='#f4f4f5'
    />
  )
}

export default TextInput
