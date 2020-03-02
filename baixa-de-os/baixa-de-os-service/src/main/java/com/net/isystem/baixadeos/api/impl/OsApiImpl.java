package com.net.isystem.baixadeos.api.impl;

import com.net.isystem.baixadeos.api.OsApi;
import com.net.isystem.baixadeos.domain.dto.OsDto;
import com.net.isystem.baixadeos.service.OsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class OsApiImpl implements OsApi {

    @Autowired
    OsService osService;

    @Override
    public ResponseEntity<?> baixarOs(OsDto os) throws InterruptedException {
        osService.baixarOs(os);
        Thread.sleep(3*1000);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
