import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'
import AddInvoice from '../components/AddInvoice'

function Home() {

  const[addInvoice,setAddInvoice] = useState(false)

  const toggleInvoice = () => {
    setAddInvoice(!addInvoice)
  }

  return (
    <div>
      <Header />
      <Box style={{ margin: 30 }}>
        <Typography variant="h4">Pending Invoices</Typography>
        {!addInvoice && <Button
          variant='contained'
          style={{ marginTop: 15, height:45}}
          onClick={() => toggleInvoice()}
        >Add Invoice</Button>}
        { addInvoice && <AddInvoice />}
      </Box>
    </div>
  )
}

export default Home