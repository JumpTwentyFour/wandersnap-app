import React from 'react'
import cn from 'classnames'
import { Text, View } from 'react-native'
import ScrollView from '@/components/views/ScrollView'
import TextInput from '@/components/inputs/TextInput'
import SearchInput from '@/components/inputs/SearchInput'
import CalendarInput from '@/components/inputs/CalendarInput'
import ImageInput from '@/components/inputs/ImageInput'
import Toggle from '@/components/pressables/Toggle'
import Button from '@/components/pressables/Button'
import IconButton from '@/components/pressables/IconButton'
import Icon from '@/components/Icon'
import AuthHeader from '@/components/headers/AuthHeader'
import DashboardHeader from '@/components/headers/DashboardHeader'
import TripHeader from '@/components/headers/TripHeader'
import BottomSheet from '@/components/BottomSheet'
import { ButtonType, ButtonVariant } from '@/types/button'
import FormHeader from '@/components/headers/formHeader/FormHeader'
import FormHeaderTitle from '@/components/headers/formHeader/FormHeaderTitle'
import FormHeaderButton from '@/components/headers/formHeader/FormHeaderButton'
import Map from '@/components/Map'
import { useColours } from '@/hooks/useTailwind'
import { ImageInputSize } from '@/types/imageInput'
import { IconSize } from '@/types/icon'
import { MarkerSize } from '@/types/map'

function ComponentLibraryScreen() {
  const [showBottomSheet, setShowBottomSheet] = React.useState(false)
  const [toggleValue, setToggleValue] = React.useState(false)

  const colours = useColours()

  return (
    <ScrollView className="mt-10">
      <Text className="w-full my-6 font-bold text-center">Inputs</Text>
      <Title>Text input</Title>
      <Backdrop bgClass="bg-purple-400">
        <TextInput placeholder="Enter some text" />
      </Backdrop>

      <Title>Text input with password type</Title>
      <Backdrop bgClass="bg-purple-400">
        <TextInput placeholder="Password" type="password" />
      </Backdrop>

      <Title>Calendar input</Title>
      <Backdrop bgClass="bg-purple-400">
        <CalendarInput />
      </Backdrop>

      <Title>Search input</Title>
      <Backdrop bgClass="bg-slate-900">
        <SearchInput onChange={(value) => console.log(value)} />
      </Backdrop>

      <Title>Image input - small</Title>
      <Backdrop bgClass="bg-slate-900">
        <ImageInput
          size={ImageInputSize.Small}
          onChange={(images) => console.log(images)}
        />
      </Backdrop>

      <Title>Image input - medium</Title>
      <Backdrop bgClass="bg-slate-900">
        <ImageInput
          size={ImageInputSize.Medium}
          onChange={(images) => console.log(images)}
        />
      </Backdrop>

      <Title>Image input - large</Title>
      <Backdrop bgClass="bg-slate-900">
        <ImageInput
          size={ImageInputSize.Large}
          onChange={(images) => console.log(images)}
        />
      </Backdrop>

      <Title>Toggle</Title>
      <Backdrop bgClass="bg-slate-900">
        <Toggle
          options={['Photos', 'Albums']}
          value={toggleValue}
          onChange={(value, option) => {
            setToggleValue(value)
            console.log(value, option)
          }}
        />
      </Backdrop>

      <Text className="w-full my-6 font-bold text-center">
        Buttons and Anchors
      </Text>
      <Title>Primary buttons</Title>
      <Backdrop>
        <Button
          label="Primary Button"
          variant={ButtonVariant.Primary}
          type={ButtonType.Solid}
        />
      </Backdrop>
      <Backdrop bgClass="bg-purple-400">
        <Button
          label="Primary Button disabled"
          variant={ButtonVariant.Primary}
          type={ButtonType.Solid}
          disabled
        />
      </Backdrop>
      <Backdrop>
        <Button
          label="Primary Button Outline"
          variant={ButtonVariant.Primary}
          type={ButtonType.Outline}
        />
      </Backdrop>

      <Title>Seconday buttons</Title>
      <Backdrop>
        <Button
          variant={ButtonVariant.Secondary}
          type={ButtonType.Solid}
          label="Secondary Button"
        />
      </Backdrop>
      <Backdrop bgClass="bg-purple-400">
        <Button
          variant={ButtonVariant.Secondary}
          type={ButtonType.Solid}
          label="Secondary Button disabled"
          disabled
        />
      </Backdrop>
      <Backdrop bgClass="bg-purple-400">
        <Button
          variant={ButtonVariant.Secondary}
          type={ButtonType.Outline}
          label="Secondary Button Outline"
        />
      </Backdrop>
      <Backdrop bgClass="bg-purple-400">
        <Button
          variant={ButtonVariant.Secondary}
          label="Secondary Button without style"
        />
      </Backdrop>

      <Title>Tertiary buttons</Title>
      <Backdrop bgClass="bg-slate-900">
        <Button
          variant={ButtonVariant.Tertiary}
          type={ButtonType.Solid}
          label="Tertiary Button Solid"
        />
      </Backdrop>
      <Backdrop bgClass="bg-slate-900">
        <Button
          variant={ButtonVariant.Tertiary}
          type={ButtonType.Outline}
          label="Tertiary Button Outlines"
        />
      </Backdrop>

      <Title>Icon buttons</Title>
      <View className="flex flex-row items-center my-1 justify-evenly">
        <IconButton
          bgClass="bg-purple-400"
          icon="EyeSlashIcon"
          size={IconSize.Small}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-purple-400"
          icon="ChevronLeftIcon"
          size={IconSize.Medium}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-purple-400"
          icon="EllipsisIcon"
          size={IconSize.Large}
          colour="#F9F8FF"
        />
      </View>
      <View className="flex flex-row items-center my-1 justify-evenly">
        <IconButton
          bgClass="bg-slate-900"
          icon="GridIcon"
          size={IconSize.Small}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-slate-900"
          icon="PlusIcon"
          size={IconSize.Medium}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-slate-900"
          icon="MapIcon"
          size={IconSize.Large}
          colour="#F9F8FF"
        />
      </View>
      <View className="flex flex-row items-center my-1 justify-evenly">
        <IconButton
          bgClass="bg-blue-700"
          icon="EyeIcon"
          size={IconSize.Small}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-blue-700"
          icon="ImageIcon"
          size={IconSize.Medium}
          colour="#F9F8FF"
        />
        <IconButton
          bgClass="bg-blue-700"
          icon="UserIcon"
          size={IconSize.Large}
          colour="#F9F8FF"
        />
      </View>

      <Text className="w-full my-6 font-bold text-center">Icons</Text>
      <View className="flex items-center w-full h-auto p-2">
        <View
          className={
            'w-4/5 p-2 rounded flex flex-row items-center justify-evenly flex-wrap'
          }
        >
          <Icon name="EyeIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="EyeSlashIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="CameraIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="CalendarIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="CheckmarkIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon
            name="ChevronLeftIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
          <Icon
            name="ChevronRightIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
          <Icon name="ChevronUpIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon
            name="ChevronDownIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
          <Icon
            name="ExclamationCircleIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
          <Icon name="EllipsisIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon
            name="EllipsisCircleIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
          <Icon name="LockIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="PhotoIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="PlusIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="PlusCircleIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="MapIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="GridIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="UserIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="ImageIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="PinIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="PersonIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="TrashIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="SearchIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon name="XMarkIcon" size={IconSize.Medium} colour="#7E5BFF" />
          <Icon
            name="XMarkCircleIcon"
            size={IconSize.Medium}
            colour="#7E5BFF"
          />
        </View>
      </View>

      <Text className="w-full my-6 font-bold text-center">Headers</Text>
      <Title>Auth Header</Title>
      <Backdrop bgClass="bg-indigo-400">
        <AuthHeader />
      </Backdrop>
      <Title>Dashboard Header</Title>
      <Backdrop bgClass="bg-slate-700">
        <DashboardHeader>My trips</DashboardHeader>
      </Backdrop>
      <Title>Trip Header</Title>
      <Backdrop bgClass="bg-slate-700/50">
        <TripHeader />
      </Backdrop>
      <Title>Form Header</Title>
      <Backdrop bgClass="bg-tuatura/75" fullWidth>
        <FormHeader
          leftComponent={
            <FormHeaderButton
              onPress={() => console.log('left button pressed')}
              label="Cancel"
            />
          }
          centerComponent={<FormHeaderTitle title="Create trip" />}
          rightComponent={
            <FormHeaderButton
              onPress={() => console.log('right button pressed')}
              label="Next"
              iconRight={
                <Icon
                  name="ChevronRightIcon"
                  size={IconSize.Small}
                  colour={colours.ghost}
                />
              }
            />
          }
        />
        <FormHeader
          leftComponent={
            <FormHeaderButton
              onPress={() => console.log('left button pressed')}
              iconLeft={
                <Icon
                  size={IconSize.Small}
                  name="ChevronLeftIcon"
                  colour={colours.ghost}
                ></Icon>
              }
            />
          }
          centerComponent={<FormHeaderTitle title="Find Location" />}
        />
        <FormHeader
          leftComponent={
            <FormHeaderButton
              onPress={() => console.log('left button pressed')}
              iconLeft={
                <Icon
                  size={IconSize.Small}
                  name="ChevronLeftIcon"
                  colour={colours.ghost}
                ></Icon>
              }
            />
          }
          centerComponent={<FormHeaderTitle title="Add Location" />}
          rightComponent={
            <FormHeaderButton
              onPress={() => console.log('right button pressed')}
              label="Save"
            />
          }
        />
        <FormHeader
          leftComponent={
            <FormHeaderButton
              onPress={() => console.log('left button pressed')}
              iconLeft={
                <Icon
                  size={IconSize.Small}
                  name="XMarkIcon"
                  colour={colours.ghost}
                ></Icon>
              }
            />
          }
          centerComponent={
            <Toggle
              options={['Photos', 'Albums']}
              value={toggleValue}
              onChange={(value, option) => {
                setToggleValue(value)
                console.log(value, option)
              }}
            />
          }
          rightComponent={
            <FormHeaderButton
              onPress={() => console.log('right button pressed')}
              label="Add"
            />
          }
        />
        <FormHeader
          centerComponent={<FormHeaderTitle title="Find Location" />}
          rightComponent={
            <FormHeaderButton
              onPress={() => console.log('right button pressed')}
              label="Done"
            />
          }
        />
      </Backdrop>

      <Text className="w-full my-6 font-bold text-center">Listings</Text>
      {/* develop listings here */}

      <Text className="w-full my-6 font-bold text-center">Bottom sheets</Text>
      <Backdrop>
        <Button
          label="Open bottom sheet"
          variant={ButtonVariant.Primary}
          type={ButtonType.Solid}
          onPress={() => setShowBottomSheet(!showBottomSheet)}
        />
      </Backdrop>
      <BottomSheet open={showBottomSheet}>
        <Text className="w-full my-6 font-bold text-center text-ghost">
          Bottom sheet ⚡️
        </Text>
        <Button
          label="Close bottom sheet"
          variant={ButtonVariant.Secondary}
          type={ButtonType.Outline}
          onPress={() => setShowBottomSheet(false)}
        />
      </BottomSheet>

      <Text className="w-full my-6 font-bold text-center">Tabs</Text>
      {/* develop tabs here */}

      <Text className="w-full my-6 font-bold text-center">Overlay</Text>
      {/* develop overlay here */}

      <Text className="w-full my-6 font-bold text-center">Map</Text>
      <Backdrop bgClass="h-96">
        <Map
          initialRegion={{
            latitude: 52.470432487287184,
            latitudeDelta: 0.3085811511499088,
            longitude: -1.8935513857597124,
            longitudeDelta: 0.3895548350484148,
          }}
          markers={[
            {
              key: 'j24',
              size: MarkerSize.LARGE,
              title: 'Jump24',
              description:
                '174 Great Hampton Row, Birmingham, West Midlands, B19 3JP',
              coordinate: {
                latitude: 52.489946,
                longitude: -1.906173,
              },
            },
          ]}
        />
      </Backdrop>

      <Text className="w-full my-6 font-bold text-center">Wizard</Text>
      {/* develop wizard here */}
    </ScrollView>
  )
}

/**
 * This is a helper component to allow white or light coloured components
 * to be easily viewable.
 */
function Backdrop(props: {
  children: React.ReactNode
  bgClass?: string
  fullWidth?: boolean
}) {
  return (
    <View className="flex items-center w-full h-auto p-2">
      <View
        className={cn(
          'p-2 rounded',
          props.bgClass,
          props.fullWidth ? 'w-full' : 'w-4/5',
        )}
      >
        {props.children}
      </View>
    </View>
  )
}

function Title(props: { children: React.ReactNode }) {
  return (
    <Text className="w-full pl-12 text-gray-500 font-mont-bold">
      {props.children}
    </Text>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
