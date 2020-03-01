package com.net.isystem.baixadeos.api;

import com.net.isystem.baixadeos.domain.dto.OsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/baixa-os-service/os")
public interface OsApi {

    @PostMapping("/baixar")
    ResponseEntity<?> baixarOs(@RequestBody OsDto poc);
}
