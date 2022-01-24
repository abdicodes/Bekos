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
    const [lang, setLang] = useState('');
    const [definition, setDefinition] = useState('');
    const classes = useStyles();

  return (
  <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete='off'>
          <Grid item xs={6} md={12} className={classes.padding}>
                  <Typography gutterBottom variant="h6">Dictionary</Typography>
                  <TextField label="Language (2 letters)" value={lang} onChange={(e) => setLang(e.target.value)} fullwidth/>
              </Grid>
          <Grid item xs={6} md={12} className={classes.padding}>
                  <TextField label="Word to search..." value={wordToSearch} onChange={(e) => setWordToSearch(e.target.value)} fullwidth/>
                    <Button variant="contained" color="primary" fullwidth onClick={(e) => fetchWord(lang, wordToSearch, setDefinition)}>
                        Search Word
                    </Button>
              </Grid>
              <Grid item xs={30} md={30} className={classes.padding}>
              <TextField
                id="outlined-multiline-static"
                label="Definition"
                multiline
                rows={20}
                defaultValue={definition}
        />
              </Grid>
          </form>
      </Paper>
  </Container>
  )
};

const fetchWord = async (lang, word, func) => {
    // Where we're fetching data from
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const payload = data[0];
        console.log(payload);
        const result = `
Word: ${payload.word}
Phonetic: ${payload.phonetic}
Origin: ${payload.origin}
Definition: ${payload.meanings[0].definitions[0].definition}
        `;
        console.log(result);
        return func(result);
    } catch (error) {
        return console.error(error);
    }}

export default Dictionary;