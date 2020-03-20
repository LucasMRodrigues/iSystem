package com.net.isystem.baixadeos.service;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

@Service
public class ConnectorService {

    public String obterEndpointDoArquivoDeConfiguracao() throws IOException {

        File file = new File("/Applications/Projetos/config.properties.txt");

        BufferedReader br = new BufferedReader(new FileReader(file));

        return br.readLine();
    }
}
