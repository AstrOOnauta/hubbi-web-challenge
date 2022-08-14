import { FormEvent, RefObject } from 'react'
import { IconButton, InputBase, Paper } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { grey, red } from '@mui/material/colors'

interface SearchProps {
  search: (e: FormEvent<Element>) => void
  inputSearchRef: RefObject<HTMLInputElement>
}

export default function Search(props: SearchProps) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        background: 'rgba( 0, 0, 0, 0.6 )',
      }}
      onSubmit={props.search}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: grey[50] }}
        placeholder="Search a character"
        inputRef={props.inputSearchRef}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px', color: red[600] }}
        aria-label="search"
      >
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  )
}
