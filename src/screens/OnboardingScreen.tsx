import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import Wizard from '@/components/wizard/Wizard'
import { SetupProps } from '@/types/props'
import ImageGridImage1 from '@/assets/images/talybont-res.jpeg'
import ImageGridImage2 from '@/assets/images/fossil.jpeg'
import ImageGridImage3 from '@/assets/images/mushroom.jpeg'
import { WizardItemType } from '@/types/wizard'

type Props = SetupProps<'Onboarding'>
function OnboardingScreen(props: Props) {
  const { navigation } = props
  const dimensions = Dimensions.get('window')
  const [activeDotIndex, setActiveDotIndex] = React.useState<number>(0)

  const WIZARD_ITEMS: Array<WizardItemType> = [
    {
      title: 'Create a trip',
      body: 'Start by adding your trip name and date',
      actionText: 'Skip',
      imageUrl: ImageGridImage1,
      action: () => setActiveDotIndex(activeDotIndex + 1),
    },
    {
      title: 'Add your destinations',
      body: 'Add the locations you visited on your trip',
      actionText: 'Skip',
      imageUrl: ImageGridImage2,
      action: () => setActiveDotIndex(activeDotIndex + 1),
    },
    {
      title: 'Upload your snaps',
      body: 'Add and organise your snaps for your trips',
      actionText: 'Start wandering',
      imageUrl: ImageGridImage3,
      action: () => navigation.navigate('Home'),
    },
  ]

  return (
    <ScrollView style={{ height: dimensions.height, width: dimensions.width }}>
      <Wizard
        data={WIZARD_ITEMS}
        height={dimensions.height}
        width={dimensions.width}
        activeDotIndex={activeDotIndex}
        setActiveDotIndex={setActiveDotIndex}
      />
    </ScrollView>
  )
}

OnboardingScreen.title = 'Onboarding'
export default OnboardingScreen
