import React from 'react'
import { AppBar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: '30px 100px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px !important',
    border: '2px solid #333',
    boxShadow: 'none !important',
    backgroundColor: 'rgba(255, 255, 255, .8) !important'
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Zoom Clone
        </Typography>
      </AppBar>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App