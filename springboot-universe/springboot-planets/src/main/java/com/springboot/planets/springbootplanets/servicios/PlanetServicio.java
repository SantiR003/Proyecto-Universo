package com.springboot.planets.springbootplanets.servicios;

import java.util.List;

import com.springboot.planets.springbootplanets.entidades.Planet;
import com.springboot.planets.springbootplanets.http.response.LunasByPlanetaIdResponse;

public interface PlanetServicio {

    List<Planet> findAll();

    Planet findById(Long id);

    LunasByPlanetaIdResponse findLunasByPlanetaId(Long id);

    List<Planet> findPlanetasByEstrellaId(Long id);

}
