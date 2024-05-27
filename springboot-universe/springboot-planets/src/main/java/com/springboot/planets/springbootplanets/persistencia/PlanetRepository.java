package com.springboot.planets.springbootplanets.persistencia;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springboot.planets.springbootplanets.entidades.Planet;

@CrossOrigin(origins = "http://localhost:5173")
@Repository
public interface PlanetRepository extends CrudRepository<Planet, Long> {

    @Query("select p from Planet p where p.estrellaId = :id")
    List<Planet> findPlanetasByEstrellaId(Long id);

}
