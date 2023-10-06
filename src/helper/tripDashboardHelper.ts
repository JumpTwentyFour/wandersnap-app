import AlbumImage1 from '@/assets/images/20230707_194027.jpg'
import AlbumImage2 from '@/assets/images/20230707_210635.jpg'
import AlbumImage3 from '@/assets/images/20230707_184730.jpg'

const ALBUM_IMAGES = [AlbumImage1, AlbumImage2, AlbumImage3]

export const TRIPS = [
  {
    id: 1,
    name: 'South East Asia',
    start_date: new Date('2020-02-23T00:00:00+0000'),
    end_date: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
    cover_photo: AlbumImage1,
  },
  {
    id: 2,
    name: 'USA Roadtrip',
    start_date: new Date('2020-02-23T00:00:00+0000'),
    end_date: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
    cover_photo: AlbumImage1,
  },
  {
    id: 3,
    name: 'The Caribbean',
    start_date: new Date('2020-02-23T00:00:00+0000'),
    end_date: new Date('2020-04-09T00:00:00+0000'),
    images: ALBUM_IMAGES,
    cover_photo: AlbumImage1,
  },
]
