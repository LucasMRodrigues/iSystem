package com.net.isystem.baixadeos.domain.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OsDto {

    private String cpf;
    private String contrato;
    private String oss;
    private String caId;
    private String smartCard;
    private String cidade;
    private String endpoint;
}
