/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from '@mui/material'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const STARWARS_BANNERS = [
  {
    path: 'https://laughingsquid.com/wp-content/uploads/2015/10/a-music-only-version-of-the-new.jpg',
  },
  {
    path: 'https://images7.alphacoders.com/401/thumb-1920-401484.jpg',
  },
  {
    path: 'https://media.contentapi.ea.com/content/dam/walrus/common/season2-falconvstie.jpg.adapt.1920w.jpg',
  },
  {
    path: 'https://cdn.wallpapersafari.com/27/49/A2iBke.jpg',
  },
  {
    path: 'https://wallup.net/wp-content/uploads/2019/07/24/566450-star-wars-force-awakens-action-adventure-sci-fi-futuristic-1star-wars-force-awakens-spaceship.jpg',
  },
]

export const Carousel = () => {
  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault()

  const items = STARWARS_BANNERS.map((banner, index) => {
    return (
      <img
        key={index}
        src={banner.path}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Banner"
        style={{
          width: '100%',
          height: mobile ? '30vh' : tablet ? '50vh' : '100vh',
          backgroundSize: 'contain',
        }}
      />
    )
  })
  return (
    <AliceCarousel
      autoPlayInterval={3000}
      mouseTracking
      autoPlay
      infinite
      disableButtonsControls
      items={items}
    />
  )
}
