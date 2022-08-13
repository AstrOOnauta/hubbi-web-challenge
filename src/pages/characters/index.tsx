import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import NextLink from 'next/link'
import { grey, red } from '@mui/material/colors'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import { CharacterResponse } from '../../shared/interfaces/characters'
import { apiClient } from '../../shared/services/api'

export default function Characters() {
  const [characters, setCharacters] = useState<CharacterResponse[]>([])
  const [filteredCharacters, setFilteresCharacters] = useState<
    CharacterResponse[]
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const inputSearchRef = useRef<HTMLInputElement>(null)

  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  const fetchData = async () => {
    setIsLoading(true)

    await apiClient
      .get(`people/?page=${page}`)
      .then((response) => {
        setCharacters([...characters, ...response.data.results])
        setIsLoading(false)
        setPage(page + 1)
      })
      .catch((error) => console.log('error', error))
  }

  const search = (e: React.FormEvent) => {
    e.preventDefault()
    const newCharacters = characters.filter((character) => {
      if (inputSearchRef.current)
        return character.name
          .toUpperCase()
          .includes(inputSearchRef.current.value.toUpperCase())
    })

    setFilteresCharacters(newCharacters)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setFilteresCharacters(characters)
  }, [characters])

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        padding: mobile
          ? '7.5rem 2rem 1rem 2rem'
          : tablet
          ? '7.5rem 4rem 1rem 4rem'
          : '7.5rem 18rem 1rem 18rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          marginBottom: '1rem',
        }}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            background: 'rgba( 0, 0, 0, 0.6 )',
          }}
          onSubmit={search}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: grey[50] }}
            placeholder="Search a character"
            inputRef={inputSearchRef}
          />
          <IconButton
            type="submit"
            sx={{ p: '10px', color: red[600] }}
            aria-label="search"
          >
            <SearchOutlinedIcon />
          </IconButton>
        </Paper>
      </Box>
      {isLoading && filteredCharacters.length === 0 ? (
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
      ) : filteredCharacters.length === 0 ? (
        <Typography>Not found characters...</Typography>
      ) : (
        <Grid
          container
          sx={{
            width:
              filteredCharacters.length < 10
                ? '100%'
                : mobile
                ? '105%'
                : '103%',
            maxHeight: '100%',
            overflowY: filteredCharacters.length < 10 ? 'hidden' : 'auto',
            paddingRight:
              filteredCharacters.length < 10
                ? ''
                : mobile
                ? '1rem'
                : tablet
                ? '1rem'
                : '1.5rem',
          }}
        >
          {filteredCharacters.map((character, index) => {
            let id = '0'

            if (index < 10) {
              id = character.url.slice(-2, -1)
            } else if (index < 100) {
              id = character.url.slice(-3, -1)
            } else {
              id = character.url.slice(-4, -1)
            }

            return (
              <NextLink href={`/characters/${id}`} passHref key={index}>
                <Grid
                  item
                  sx={{
                    width: '100%',
                    height: '60px',
                    padding: '0 2rem',
                    marginBottom: '1rem',
                    background: 'rgba( 0, 0, 0, 0.6 )',
                    borderLeft: '16px solid rgba( 198, 40, 40, 0.5 )',
                    borderRadius: '4px',
                    display: 'flex',
                    cursor: 'pointer',
                    '&:hover': {
                      background: grey[900],
                      borderColor: red[800],
                    },
                  }}
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Typography>{character.name}</Typography>
                </Grid>
              </NextLink>
            )
          })}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {page > 9 ? (
              ''
            ) : isLoading ? (
              <CircularProgress />
            ) : (
              <Button onClick={fetchData} variant="contained">
                Load more
              </Button>
            )}
          </Box>
        </Grid>
      )}
    </Box>
  )
}
