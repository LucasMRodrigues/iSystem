package com.net.isystem.baixadeos.service;

import com.net.isystem.baixadeos.domain.dto.OsDto;
import org.springframework.stereotype.Service;

@Service
public class OsService {

    private String validacaoProdutoEndpoint = "http://servbus/Infraestrutura/Equipamento/EquipamentoProxy11?WSDL";
    private String baixaOsEndpoint = "http://10.28.28.64:7091/ativar/despacho/ordemservico/proxyservice/ExecurtarBaixaOS12V2?wsdl";

    public void baixarOs(OsDto os) {
        validarEquipamento();
        // TODO
    }

    private void validarEquipamento() {
        // TODO
    }
}
