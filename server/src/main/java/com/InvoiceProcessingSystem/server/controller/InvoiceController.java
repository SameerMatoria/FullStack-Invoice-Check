package com.InvoiceProcessingSystem.server.controller;
import com.InvoiceProcessingSystem.server.model.Invoice;
import com.InvoiceProcessingSystem.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;
    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice ){
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> ShowInvoice(@RequestBody Invoice invoice ){
        return this.invoiceService.getInvoices();
    }
}
