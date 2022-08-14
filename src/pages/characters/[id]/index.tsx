import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CharacterResponse } from '../../../shared/interfaces/characters'
import { apiClient } from '../../../shared/services/api'
import { stringAvatar } from '../../../shared/utils/stringAvatar'

export default function CharacterDetails() {
  const [character, setCharacter] = useState<CharacterResponse | undefined>(
    undefined
  )

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  const route = useRouter()
  const { id } = route.query

  const fetchCharacterData = async () => {
    setIsLoading(true)

    await apiClient
      .get(`people/${id}`)
      .then((response) => {
        setCharacter(response.data)
        setIsLoading(false)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    fetchCharacterData()
  }, [id])

  if (isLoading) {
    return (
      <Grid
        container
        sx={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Grid>
    )
  } else {
    return (
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          padding: mobile
            ? '8rem 2rem 0 2rem'
            : tablet
            ? '0 4rem'
            : '0 17.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          sx={{
            position: 'relative',
            width: '100%',
            padding: '2rem',
            background: 'rgba( 0, 0, 0, 0.6 )',
            boxShadow: '0 0 32px 8px rgba( 0, 0, 0, 0.37 )',
            borderBottom: '2px solid rgba( 198, 40, 40, 0.5 )',
          }}
        >
          {character && !mobile ? (
            <Avatar
              {...stringAvatar(character.name)}
              sx={{
                width: 200,
                height: 200,
                position: 'absolute',
                top: -100,
                right: 100,
                fontSize: '5rem',
                bgcolor: red[400],
                color: grey[50],
              }}
            />
          ) : (
            ''
          )}
          <Grid container direction="column">
            <Grid item xs={20}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: red[500],
                  marginBottom: '2rem',
                }}
              >
                {character?.name}
              </Typography>
            </Grid>
            <Grid item xs={20}>
              <Typography
                sx={{
                  marginBottom: '2rem',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                nisi illum, alias accusamus est possimus, atque doloribus saepe,
                ullam temporibus inventore enim laborum sed. Eaque et ex odio,
                atque inventore cupiditate magnam facere rerum earum, natus
                distinctio accusantium! Adipisci illum deleniti assumenda
                officiis sunt in cupiditate aspernatur vero omnis. Maxime.
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Gender: {character?.gender}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Birth year: {character?.birth_year}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>
                  Starships: {character?.starships.length}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Films: {character?.films.length}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Height: {character?.height} cm</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Mass: {character?.mass} kg</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Hair color: {character?.hair_color}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Eye color: {character?.eye_color}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Skin color: {character?.skin_color}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    )
  }
}
