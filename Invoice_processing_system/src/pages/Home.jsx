import React from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'

function Home() {
  return (
    <div>
        <Header />
        <Box style={{margin:30}}>
          <Typography variant="h4">Pending Invoices</Typography>
          <Button variant='contained' style={{marginTop:15}}>Add Invoice</Button>
        </Box>
    </div>
  )
}

export default Home