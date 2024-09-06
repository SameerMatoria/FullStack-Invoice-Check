import React, { useState } from 'react'
import { Box, TextField, Typography, styled, Button } from '@mui/material'
import { saveInvoice } from '../../services/Api'


const BoxStyled = styled(Box)({
    marginTop: 10,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        height: 45
    }
})

function AddInvoice(){

    const defaultObj = {
        vendor: '',
        product: '',
        amount: 0,
        date: ''
    }

    const [invoice, setInvoice] = useState(defaultObj)

    const onValueChange = (e) => {
        setInvoice({ ...invoice ,[e.target.name]: e.target.value })
        console.log(invoice.vendor);
    }
    
    const addNewInvoice = async() => {
        await saveInvoice({...invoice , amount: Number(invoice['amount'])})
    }
   


    return (
        <BoxStyled>
            <Typography>Enter invoice</Typography>
            <TextField
                variant='filled'
                placeholder='Enter vandor name'
                onChange={(e) => onValueChange(e)} 
                name='vendor' />
            <TextField
                variant='filled'
                placeholder='Enter product name'
                onChange={(e) => onValueChange(e)} 
                name='product' />
            <TextField
                variant='filled'
                placeholder='Enter amount name' type='number'
                onChange={(e) => onValueChange(e)} 
                name='amount' />
            <TextField
                variant='filled'
                placeholder='Enter date name' type='date'
                onChange={(e) => onValueChange(e)} 
                name='date' />
            <Button variant='contained'
                style={{ height: 45 }}
                onClick={()=>addNewInvoice()}> 
            Add  
            </Button>
        </ BoxStyled >
    )
}

export default AddInvoice