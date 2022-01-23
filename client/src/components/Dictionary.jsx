import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
   }));

const Dictionary = () => {
    const [wordToSearch, setWordToSearch] = useState('');
    const classes = useStyles();

  return (
  <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete='off'>
              <Grid item xs={12} md={6} className={classes.padding}>
                  <Typography gutterBottom variant="h6">Dictionary</Typography>
                  <TextField label="Word to search..." value={wordToSearch} onChange={(e) => setWordToSearch(e.target.value)} fullwidth/>
                    <Button variant="contained" color="primary" fullwidth onClick={(e) => fetchWord()}>
                        Search Word
                    </Button>
              </Grid>
          </form>
      </Paper>
  </Container>
  )
};

const fetchWord = async () => {
    // Where we're fetching data from
    try {
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
        const data = await response.json();
        return console.log(data);
    } catch (error) {
        return console.error(error);
    }}

export default Dictionary;