package com.net.isystem.baixadeos.api;

import com.net.isystem.baixadeos.domain.dto.OsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/baixa-os-service/connector")
public interface ConnectorApi {

    @GetMapping("/obter-endpoint")
    ResponseEntity<?> obterEndpoint() throws IOException;
}
