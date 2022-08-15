import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Login } from '../../../shared/interfaces/login'

import { stringAvatar } from '../../../shared/utils/stringAvatar'

interface UserBadgeProps {
  login: Login
}

export default function UserBadge(props: UserBadgeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '.7rem',
        bgcolor: 'rgba( 198, 40, 40, 0.5 )',
        borderRadius: '50px',
      }}
    >
      <Avatar {...stringAvatar(props.login.username)} />
      <Typography
        sx={{
          fontWeight: 'bold',
          marginTop: '.2rem',
          paddingRight: '1rem',
        }}
      >
        {props.login.username}
      </Typography>
    </Box>
  )
}
