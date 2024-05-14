package com.springboot.stars.springbootstars.servicios;

import java.util.List;

import com.springboot.stars.springbootstars.entidades.Estrella;
import com.springboot.stars.springbootstars.http.response.FindPlanetaByEstrellaIdResponse;

public interface EstrellaServicio {

    List<Estrella> findAll();

    Estrella findById(Long id);

    FindPlanetaByEstrellaIdResponse findPlanetaByEstrellaIdResponse(Long id);

}
