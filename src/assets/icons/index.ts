import { FC, SVGProps } from 'react'

interface IconMap {
    [key: string]: {
      default: FC<SVGProps<SVGSVGElement>>;
    };
  }
  
export const icons: IconMap = {
  EyeIcon: require('./eye.svg'),
  EyeSlashIcon: require('./eye-slash.svg'),
  CameraIcon: require('./camera.svg'),
  CalendarIcon: require('./calendar.svg'),
  CheckmarkIcon: require('./checkmark.svg'),
  ChevronLeftIcon: require('./chevron-left.svg'),
  ChevronRightIcon: require('./chevron-right.svg'),
  ChevronUpIcon: require('./chevron-up.svg'),
  ChevronDownIcon: require('./chevron-down.svg'),
  ExclamationCircleIcon: require('./exclamationmark-circle.svg'),
  EllipsisIcon: require('./ellipsis.svg'),
  EllipsisCircleIcon: require('./ellipsis-circle.svg'),
  LockIcon: require('./lock.svg'),
  PhotoIcon: require('./photo.svg'),
  PlusIcon: require('./plus.svg'),
  PlusCircleIcon: require('./plus-circle.svg'),
  MapIcon: require('./map.svg'),
  GridIcon: require('./grid.svg'),
  UserIcon: require('./user.svg'),
  ImageIcon: require('./image.svg'),
  PinIcon: require('./pin.svg'),
  PersonIcon: require('./person.svg'),
  TrashIcon: require('./trash.svg'),
  SearchIcon: require('./search.svg'),
  XMarkIcon: require('./xmark.svg'),
  XMarkCircleIcon: require('./xmark-circle.svg'),
}