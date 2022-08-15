/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material'
import NextLink from 'next/link'
import { grey, red } from '@mui/material/colors'

import { CharacterResponse } from '../../shared/interfaces/characters'
import { apiClient } from '../../shared/services/api'
import Search from '../../components/Search'
import { stringAvatar } from '../../shared/utils/stringAvatar'
import LoginContext from '../../shared/context/login'
import OpenLoginContext from '../../shared/context/openLogin'

export default function Characters() {
  const { setOpenLogin } = useContext(OpenLoginContext)
  const { login } = useContext(LoginContext)

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
        <Search search={search} inputSearchRef={inputSearchRef} />
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
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.5)',
              border: '1px solid #ef5350',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#212121',
              border: '1px solid #c62828',
              borderRadius: '4px',
            },
          }}
        >
          {filteredCharacters.map((character, index) => {
            const id = character.url.replace(/[^0-9]/g, '')

            return (
              <NextLink
                href={login.hasLogin ? `/characters/${id}` : ''}
                passHref
                key={index}
              >
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
                  onClick={() => (login.hasLogin ? '' : setOpenLogin(true))}
                >
                  <Avatar {...stringAvatar(character.name)} />
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
