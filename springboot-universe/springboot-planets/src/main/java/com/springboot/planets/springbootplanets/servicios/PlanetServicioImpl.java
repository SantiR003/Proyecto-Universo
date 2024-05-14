package com.springboot.planets.springbootplanets.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.planets.springbootplanets.DTO.LunaDTO;
import com.springboot.planets.springbootplanets.cliente.LunaCliente;
import com.springboot.planets.springbootplanets.entidades.Planet;
import com.springboot.planets.springbootplanets.http.response.LunasByPlanetaIdResponse;
import com.springboot.planets.springbootplanets.persistencia.PlanetRepository;

@Service
public class PlanetServicioImpl implements PlanetServicio {

    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    LunaCliente lunaCliente;

    @Transactional(readOnly = true)
    @Override
    public List<Planet> findAll() {
        return (List<Planet>) planetRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Planet findById(Long id) {
        return planetRepository.findById(id).orElseThrow();
    }

    @Transactional(readOnly = true)
    @Override
    public LunasByPlanetaIdResponse findLunasByPlanetaId(Long id) {
        Planet planeta = planetRepository.findById(id).orElse(new Planet());

        List<LunaDTO> Lunas = lunaCliente.findByPlanetaId(id);

        return LunasByPlanetaIdResponse.builder()
                .nombre(planeta.getNombre())
                .categoria(planeta.getCategoria())
                .tipoDePlaneta(planeta.getTipoDePlaneta())
                .masa(planeta.getMasa())
                .radio(planeta.getRadio())
                .densidad(planeta.getDensidad())
                .temperatura(planeta.getTemperatura())
                .velocidad(planeta.getVelocidad())
                .periodoDeRotacion(planeta.getPeriodoDeRotacion())
                .periodoOrbital(planeta.getPeriodoOrbital())
                .edad(planeta.getEdad())
                .gravedad(planeta.getGravedad())
                .estrellaId(planeta.getEstrellaId())
                .orbita(planeta.getOrbita())
                .Lunas(Lunas)
                .build();
    }

    @Override
    public List<Planet> findPlanetasByEstrellaId(Long id) {
        return planetRepository.findPlanetasByEstrellaId(id);
    }

}
