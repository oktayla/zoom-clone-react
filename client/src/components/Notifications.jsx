import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { Phone } from '@mui/icons-material'

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
        {call.isReceivedCall && !callAccepted && (
          <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif'}}>
            <h1 style={{marginRight: 25}}>{call.name} is calling: </h1>
            <Button variant="contained" color="success" onClick={answerCall} startIcon={<Phone fontSize="large" />}>
              Answer
            </Button>
          </div>
        )}
    </>
  )
}

export default Notifications