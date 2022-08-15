/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import NextLink from 'next/link'

const CARD_IMAGES = [
  {
    title: 'Heroes',
    text: '      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci doloremque numquam distinctio dolores illo soluta magni dolore accusamus cum id.    ',
    alt: 'Heroes card',
    avatarUrl:
      'https://static.wikia.nocookie.net/f7d3490d-dec3-45e8-ad9f-3b07a2b5536f/thumbnail-down/width/1280/height/720',
    path: '/characters',
  },
  {
    title: 'Villains',
    text: '      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci doloremque numquam distinctio dolores illo soluta magni dolore accusamus cum id.    ',
    alt: 'Villains card',
    avatarUrl: 'https://wallpapercave.com/wp/wp6809099.png',
    path: '/characters',
  },

  {
    title: 'Starships',
    text: '      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci doloremque numquam distinctio dolores illo soluta magni dolore accusamus cum id.    ',
    alt: 'starships card',
    avatarUrl:
      'https://wallup.net/wp-content/uploads/2019/09/247026-star-wars-paintings-r2d2-spaceships-drawings-fan-art-x-wing-fighter-fighters-1.jpg',
    path: '/starships',
  },
]

export default function CardsSection() {
  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')
  return (
    <Box
      sx={{
        marginTop: mobile ? '4rem' : '6rem',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 0,
        background: grey[900],
      }}
    >
      <img
        src="https://wallpapercave.com/wp/1I3yb5l.jpg"
        alt="New age"
        style={{ width: '100%', height: '100%', backgroundSize: 'contain' }}
      />
      <Box
        sx={{
          padding: mobile ? '0 1rem' : tablet ? '0 2rem' : '2rem 4rem',
          minHeight: mobile ? '100%' : tablet ? '75vh' : '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {CARD_IMAGES.map((card, index) => {
          return (
            <NextLink href={card.path} passHref key={index}>
              <Card
                sx={{
                  maxWidth: tablet ? 200 : 300,
                  marginTop: mobile ? '-2rem' : '-10rem',
                  marginBottom: mobile ? '4rem' : '',
                  backgroundColor: blueGrey[700],
                }}
                key={index}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.avatarUrl}
                    alt={card.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NextLink>
          )
        })}
      </Box>
    </Box>
  )
}
