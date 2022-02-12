import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
  },
  container: {
    width: '700px !important',
    margin: '35px 0',
    padding: 0,
  },
  margin: {
    marginTop: '20px !important',
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const classes = useStyles();

  return (
    <Container className={classes.container}>
        
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Account Info</Typography>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />

                <CopyToClipboard text={me} className={classes.margin}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid>

              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a Call</Typography>
                <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />

                {callAccepted && !callEnded ? (
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<PhoneDisabled fontSize="large" />}
                    fullWidth
                    onClick={leaveCall}
                    className={classes.margin}
                    >
                    Hang Up
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Phone fontSize="large" />}
                    fullWidth
                    onClick={() => callUser(idToCall)}
                    className={classes.margin}
                  >Call</Button>
                )}
              </Grid>
            </Grid>
          </form>

          {children}
        </Paper>
    </Container>
  )
}

export default Options