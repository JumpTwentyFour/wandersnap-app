export interface FormHeaderProps {
  step: FormStep
}

export enum FormStep {
  TripDetails,
  TripFindLocation,
  TripAddLocation,
  TripUploadImages,
  TripFindLocationFinal,
}