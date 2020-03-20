package com.net.isystem.baixadeos.api.impl;

import com.net.isystem.baixadeos.api.ConnectorApi;
import com.net.isystem.baixadeos.service.ConnectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import java.io.IOException;

@Controller
public class ConnectorApiImpl implements ConnectorApi {

    @Autowired
    ConnectorService connectorService;

    @Override
    public ResponseEntity<?> obterEndpoint() throws IOException {

        String endpoint = connectorService.obterEndpointDoArquivoDeConfiguracao();

        return new ResponseEntity(endpoint, HttpStatus.OK);
    }
}
