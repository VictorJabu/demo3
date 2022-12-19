package com.example.demo3.Service;

import com.example.demo3.Repository.PlayerDetailsRepository;
import org.springframework.stereotype.Service;

@Service
public class PlayerDetailsService {

    private final PlayerDetailsRepository playerDetailsRepository;

    public PlayerDetailsService(PlayerDetailsRepository playerDetailsRepository) {
        this.playerDetailsRepository = playerDetailsRepository;
    }
}
