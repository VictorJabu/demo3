package com.example.demo3.Controller;

import com.example.demo3.Repository.TransactionRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo3.Model.TransactionDetails;
import java.util.List;

@RestController
@RequestMapping("/")
public class TransactionController {
    private final TransactionRepository transactionRepository;

    public TransactionController(TransactionRepository transactionRepository){
        this.transactionRepository = transactionRepository;
    }

    @RequestMapping(value = "/getTransactions", method = RequestMethod.GET, headers = "Accept=application/json")
    public List<TransactionDetails> getTransactions(Long playerId) {
        System.out.println(playerId);
        List<TransactionDetails> transactionalDetailsList = (List<TransactionDetails>) transactionRepository.findAllByPlayerId(playerId);
        return transactionalDetailsList;
    }
}
