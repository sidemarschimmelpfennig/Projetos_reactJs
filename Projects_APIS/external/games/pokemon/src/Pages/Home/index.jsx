import React from 'react'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import NavBar from '../../Components/NavBar'
import PokeCard from '../../Components/PokeCard'

 export default function Home() {
    const teste = "https://pokeapi.co/api/v2/pokemon?limit=50"
    fetch(teste).then((response) => {
        console.log(response)
    })

    console.log(teste)
    return (
     <div>
        <NavBar/>
        <Container maxWidth='false' >
            <Grid container>
                <Grid item xs={3}><PokeCard/></Grid>
                <Grid item xs={3}><PokeCard/></Grid>
                <Grid item xs={3}><PokeCard/></Grid>
                <Grid item xs={3}><PokeCard/></Grid>
            </Grid>
        </Container>
        
        

     </div>
   )
 }
  