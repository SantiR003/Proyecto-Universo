package com.springboot.planets.springbootplanets.cliente;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.springboot.planets.springbootplanets.DTO.LunaDTO;

@FeignClient(name = "msvc-lunas", url = "localhost:8080/api/lunas")
public interface LunaCliente {

    @GetMapping("/findByPlanetaId/{id}")
    List<LunaDTO> findByPlanetaId(@PathVariable Long id);

}
