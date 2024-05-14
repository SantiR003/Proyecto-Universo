package com.springboot.stars.springbootstars.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.stars.springbootstars.DTO.PlanetDTO;
import com.springboot.stars.springbootstars.client.PlanetClient;
import com.springboot.stars.springbootstars.entidades.Estrella;
import com.springboot.stars.springbootstars.http.response.FindPlanetaByEstrellaIdResponse;
import com.springboot.stars.springbootstars.persistencia.EstrellaRepositorio;

@Service
public class EstrellaServicioImpl implements EstrellaServicio {

    @Autowired
    EstrellaRepositorio estrellaRepositorio;

    @Autowired
    PlanetClient planetClient;

    @Override
    public List<Estrella> findAll() {
        return (List<Estrella>) estrellaRepositorio.findAll();
    }

    @Override
    public Estrella findById(Long id) {
        return estrellaRepositorio.findById(id).orElseThrow();
    }

    @Override
    public FindPlanetaByEstrellaIdResponse findPlanetaByEstrellaIdResponse(Long id) {
        Estrella estrella = estrellaRepositorio.findById(id).orElse(new Estrella());

        List<PlanetDTO> planetas = planetClient.findPlanetasByEstrellaId(id);

        return FindPlanetaByEstrellaIdResponse.builder()
                .nombre(estrella.getNombre())
                .categoria(estrella.getCategoria())
                .tipoDeEstrella(estrella.getTipoDeEstrella())
                .masa(estrella.getMasa())
                .radio(estrella.getRadio())
                .distanciaALaTierra(estrella.getDistanciaALaTierra())
                .densidad(estrella.getDensidad())
                .temperatura(estrella.getTemperatura())
                .velocidad(estrella.getVelocidad())
                .periodoDeRotacion(estrella.getPeriodoDeRotacion())
                .periodoOrbital(estrella.getPeriodoOrbital())
                .edad(estrella.getEdad())
                .gravedad(estrella.getGravedad())
                .orbita(estrella.getOrbita())
                .planetas(planetas)
                .build();
    }

}
