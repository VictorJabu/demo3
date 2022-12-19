package com.example.demo3.Service;

import com.example.demo3.Repository.TransactionRepository;
import org.springframework.stereotype.Service;

@Service
public class TransactionDetailsService {

    private final TransactionRepository transactionRepository;

    public TransactionDetailsService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
}

