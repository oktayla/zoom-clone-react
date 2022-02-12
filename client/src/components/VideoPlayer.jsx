import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles({
  video: {
    transform: 'rotateY(180deg)',
    width: '550px',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
});

const VideoPlayer = () => {
  const { name, stream, myVideo, userVideo, call, callAccepted, callEnded } = useContext(SocketContext)
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>

      { stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{ name || 'First Person' }</Typography>
    
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}

      { callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Second Person'}</Typography>

            <video playsInline muted ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  )
}

export default VideoPlayer