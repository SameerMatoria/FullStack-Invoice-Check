package com.InvoiceProcessingSystem.server.services;

import com.InvoiceProcessingSystem.server.dao.InvoiceDao;
import com.InvoiceProcessingSystem.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class InvoiceServiceImp implements InvoiceService{

    @Autowired
    InvoiceDao invoiceDao = null;
    @Override
    public Invoice addInvoice(Invoice invoice){
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices(){
        return  invoiceDao.findAll();
    }

}
