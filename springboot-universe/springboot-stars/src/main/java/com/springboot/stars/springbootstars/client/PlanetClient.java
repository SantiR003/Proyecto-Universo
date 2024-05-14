package com.springboot.stars.springbootstars.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.springboot.stars.springbootstars.DTO.PlanetDTO;

@FeignClient(name = "msvc-planets", url = "localhost:8080/api/planets")
public interface PlanetClient {

    @GetMapping("/findPlanetasByEstrellaId/{id}")
    public List<PlanetDTO> findPlanetasByEstrellaId(@PathVariable Long id);

}
