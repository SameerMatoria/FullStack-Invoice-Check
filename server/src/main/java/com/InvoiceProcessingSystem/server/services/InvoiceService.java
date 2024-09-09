package com.InvoiceProcessingSystem.server.services;

import com.InvoiceProcessingSystem.server.model.Invoice;

import java.util.List;


public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

}
