package com.example.demo3.Repository;

import com.example.demo3.Model.TransactionDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends CrudRepository<TransactionDetails, Long> {

    List<TransactionDetails> findAllByPlayerId(Long playerId);
}
