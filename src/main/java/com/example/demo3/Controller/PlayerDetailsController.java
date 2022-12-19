package com.example.demo3.Controller;


import com.example.demo3.Model.PlayerDetails;
import com.example.demo3.Repository.PlayerDetailsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.PATCH;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/")
public class PlayerDetailsController {
    private final PlayerDetailsRepository playerDetailsRepository;

    public PlayerDetailsController(PlayerDetailsRepository playerDetailsRepository){
        this.playerDetailsRepository = playerDetailsRepository;
    }

    @RequestMapping(value = "/getUserDetails", params = "username", method = RequestMethod.GET, headers = "Accept=application/json")
    public PlayerDetails getUserDetails(String username) {
        PlayerDetails playerDetails = playerDetailsRepository.findByUsername(username);
        return playerDetails;
    }

    @RequestMapping(value = "/updateBalance", method = POST, headers = "Accept=application/json")
    public PlayerDetails updateBalance(@RequestBody PlayerDetails value) {
        System.out.println(value.getId());
        System.out.println(value.getBalance());
        playerDetailsRepository.deleteById(value.getId());
        PlayerDetails playerDetails = playerDetailsRepository.save(value);
        return playerDetails;
    }

    @RequestMapping(value = "/getUserDetailsUsingPlayerId", params = "playerId", method = RequestMethod.GET, headers = "Accept=application/json")
    public Optional<PlayerDetails> getUserDeatailsUsingPlayerId(Long playerId) {
        Optional<PlayerDetails> playerDetails = playerDetailsRepository.findById(playerId);
        return playerDetails;
    }
}
