package com.example.demo3.Repository;


import com.example.demo3.Model.PlayerDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerDetailsRepository extends CrudRepository<PlayerDetails, Long> {
    PlayerDetails findByUsername(String username);
}
