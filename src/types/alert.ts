export enum AlertActionType {
  CONFIRM = 'confirm',
  DANGER = 'danger',
}

export interface AlertAction {
  text: string
  onPress: () => void
  type?: AlertActionType
}
