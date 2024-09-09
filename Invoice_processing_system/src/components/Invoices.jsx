import React from 'react'
import {Table,TableHead,TableCell,TableRow,TableBody,Button} from '@mui/material'

function Invoices({invoices}) {
  return (
    <div>
        <Table>
            <TableHead>
                <TableCell>Vendor</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
            </TableHead>
            <TableBody>
                {
                    invoices.map((invoice) =>{
                        <TableRow>
                            <TableCell>{invoice.vendor}</TableCell>
                            <TableCell>{invoice.product}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.action}</TableCell>
                            <TableCell>
                                <Button color='success' variant='contained'>Mark Done</Button>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default Invoices