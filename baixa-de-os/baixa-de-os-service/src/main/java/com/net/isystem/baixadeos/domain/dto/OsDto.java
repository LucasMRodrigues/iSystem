package com.net.isystem.baixadeos.domain.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PocDto {

    private String cpf;
    private String contrato;
    private String oss;
    private String caId;
    private String smartCard;
    private String cidade;
}
