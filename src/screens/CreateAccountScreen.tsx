import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthHeader from '@/components/headers/AuthHeader'
import Button from '@/components/pressables/Button'
import TextInput from '@/components/inputs/TextInput'
import { ButtonType, ButtonVariant } from '@/types/button'
import { SetupProps } from '@/types/props'
import { useColours } from '@/hooks/useTailwind'
import useAuthStore from '@/stores/auth'

type Props = SetupProps<'CreateAccount'>

const DEFAULT_FORM = {
  name: '',
  email: '',
  password: '',
  deviceName: 'string',
}
function CreateAccountScreen(props: Props) {
  const { navigation } = props

  const auth = useAuthStore()

  const windowHeight = Dimensions.get('window').height
  const colours = useColours()

  const [form, setForm] = React.useState(DEFAULT_FORM)

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({
    name: '',
    email: '',
    password: '',
  })

  function clearForm() {
    setForm(DEFAULT_FORM)
    setErrors({
      name: '',
      email: '',
      password: '',
    })
  }

  async function handleCreateAccount() {
    await auth.register(form).then((res) => {
      if (res.success) {
        clearForm()
        navigation.navigate('Onboarding')
      } else {
        setErrors(res.errors || {})
      }
    })
  }

  return (
    <LinearGradient
      colors={[colours.watermelon, colours.helio]}
      start={{ x: 0, y: -1 }}
      className="w-full h-full px-5 pt-20 pb-12"
      style={{ flex: 1 }}
    >
      <View className="flex flex-col justify-between h-full items">
        <AuthHeader />
        <View className="flex flex-col items-center justify-centser"></View>
        <View
          className="flex flex-col gap-5"
          style={{ height: windowHeight * 0.52 }}
        >
          <Text className="text-3xl font-comfortaa text-ghost">
            Create new account
          </Text>
          <View>
            <TextInput
              onChangeText={(text) => setForm({ ...form, name: text })}
              placeholder="Name"
            />
            {errors.name && (
              <Text className="mt-1 ml-1 text-ghost">{errors.name}</Text>
            )}
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setForm({ ...form, email: text })}
              placeholder="Email Address"
            />
            {errors.email && (
              <Text className="mt-1 ml-1 text-ghost">{errors.email}</Text>
            )}
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setForm({ ...form, password: text })}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <Text className="mt-1 ml-1 text-ghost">{errors.password}</Text>
            )}
          </View>
          <View className="flex flex-col self-stretch justify-between pt-5">
            <View className="w-full mb-12">
              <Button
                onPress={() => handleCreateAccount()}
                variant={ButtonVariant.Secondary}
                type={ButtonType.Solid}
                label="Create account"
              />
            </View>
          </View>
          <View className="absolute bottom-0 left-0 w-full pr-5">
            <Button
              onPress={() => navigation.navigate('Login')}
              variant={ButtonVariant.Secondary}
              type={ButtonType.Outline}
              label="Login"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

CreateAccountScreen.title = 'Create new account'
export default CreateAccountScreen
