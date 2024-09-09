package com.InvoiceProcessingSystem.server.dao;

import com.InvoiceProcessingSystem.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {

}
