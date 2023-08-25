export interface FormHeaderProps {
  leftComponent?: React.ReactNode
  centerComponent: React.ReactNode
  rightComponent?: React.ReactNode
}

export enum FormStep {
  TripDetails,
  TripFindLocation,
  TripAddLocation,
  TripUploadImages,
  TripFindLocationFinal,
}
