import { blueGrey } from '@mui/material/colors'

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: 'rgba( 198, 40, 40, 0.5 )',
      color: blueGrey[50],
      marginRight: '1rem',
    },
    children:
      name.split(' ').length === 1
        ? `${name.split(' ')[0][0]}`
        : `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}
