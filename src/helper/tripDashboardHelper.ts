import AlbumImage1 from '@/assets/images/20230707_194027.jpg'
import AlbumImage2 from '@/assets/images/20230707_210635.jpg'
import AlbumImage3 from '@/assets/images/20230707_184730.jpg'

const ALBUM_IMAGES = [AlbumImage1, AlbumImage2, AlbumImage3]

export const TRIPS = [
  {
    id: 1,
    title: 'South East Asia',
    dateFrom: new Date('2020-02-23T00:00:00+0000'),
    dateTo: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
  },
  {
    id: 2,
    title: 'USA Roadtrip',
    dateFrom: new Date('2020-02-23T00:00:00+0000'),
    dateTo: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
  },
  {
    id: 3,
    title: 'The Caribbean',
    dateFrom: new Date('2020-02-23T00:00:00+0000'),
    dateTo: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
  },
]
