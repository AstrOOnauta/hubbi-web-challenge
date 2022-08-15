/* eslint-disable react-hooks/exhaustive-deps */
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
import { useContext, useEffect, useState } from 'react'
import LoginContext from '../../../shared/context/login'

import { StarshipResponse } from '../../../shared/interfaces/starships'
import { apiClient } from '../../../shared/services/api'
import { stringAvatar } from '../../../shared/utils/stringAvatar'

export default function StarshipDetails() {
  const { login } = useContext(LoginContext)

  const [starship, setStarship] = useState<StarshipResponse | undefined>(
    undefined
  )

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  const route = useRouter()
  const { id } = route.query

  const fetchStarshipData = async () => {
    setIsLoading(true)

    await apiClient
      .get(`starships/${id}`)
      .then((response) => {
        setStarship(response.data)
        setIsLoading(false)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    if (!login || !login.hasLogin) {
      route.push('/')
    } else {
      fetchStarshipData()
    }
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
        alignItems="center"
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
          {starship && !mobile ? (
            <Avatar
              {...stringAvatar(starship?.name)}
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
                {starship?.name}
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
                <Typography>Model: {starship?.model}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Class: {starship?.starship_class}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Manufacturer: {starship?.manufacturer}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Crew: {starship?.crew}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Length: {starship?.length} m</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>
                  Cost: {starship?.cost_in_credits} credits
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>
                  Atmospheric Speed: {starship?.max_atmosphering_speed} kph
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Megalight: {starship?.MGLT} MGLT</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Passengers: {starship?.passengers}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>
                  Cargo capacity: {starship?.cargo_capacity} kg
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Pilots: {starship?.pilots.length}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ marginBottom: '.5rem' }}>
                <Typography>Films: {starship?.films.length}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    )
  }
}
