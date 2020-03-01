package com.net.isystem.baixadeos.api;

import com.net.isystem.baixadeos.domain.dto.PocDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/poc")
public interface PocApi {

    @PostMapping
    ResponseEntity<?> baixarOs(@RequestBody PocDto poc);
}
