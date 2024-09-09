import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'
import AddInvoice from '../components/AddInvoice'
import Invoices from '../components/Invoices'
import { getAllInvoice } from '../../services/Api'

function Home() {

  const [addInvoice, setAddInvoice] = useState(false)
  const [invoices, setInvoices] = useState([])

  const toggleInvoice = () => {
    setAddInvoice(!addInvoice)
  }

  useEffect(() => {
    const getData = async () => {
      const response =  await getAllInvoice();
      setInvoices(response.data)
    }
    getData();
  }, [])

  return (
    <div>
      <Header />
      <Box style={{ margin: 30 }}>
        <Typography variant="h4">Pending Invoices</Typography>
        {!addInvoice && <Button
          variant='contained'
          style={{ marginTop: 15, height: 45 }}
          onClick={() => toggleInvoice()}
        >Add Invoice</Button>}
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        <Box>
          <Invoices invoices={invoices} />
        </Box>
      </Box>

    </div>
  )
}

export default Home