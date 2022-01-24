import logo from './logo.svg';
import './App.css';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Notification from './components/Notification';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import Dictionary from './components/Dictionary';
/* TODO: CSS must be moved in App.css */
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
      <Dictionary />
    </div>
  );
}

export default App;
