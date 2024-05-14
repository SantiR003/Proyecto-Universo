package com.springboot.planets.springbootplanets.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.planets.springbootplanets.entidades.Planet;
import com.springboot.planets.springbootplanets.http.response.LunasByPlanetaIdResponse;
import com.springboot.planets.springbootplanets.servicios.PlanetServicioImpl;

@RestController
@RequestMapping("/api/planets")
public class PlanetControlador {
    @Autowired
    PlanetServicioImpl planetServicioImpl;

    @GetMapping("/all")
    public ResponseEntity<?> findAll() {
        try {
            List<Planet> planetas = planetServicioImpl.findAll();
            return ResponseEntity.ok(planetas);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        try {
            Planet planet = planetServicioImpl.findById(id);
            return ResponseEntity.ok(planet);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

    @GetMapping("/findLunasByPlanetaId/{id}")
    public ResponseEntity<?> findLunasByPlanetaId(@PathVariable Long id) {
        try {
            LunasByPlanetaIdResponse planet = planetServicioImpl.findLunasByPlanetaId(id);
            return ResponseEntity.ok(planet);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

    @GetMapping("/findPlanetasByEstrellaId/{id}")
    public ResponseEntity<?> findPlanetasByEstrellaId(@PathVariable Long id) {
        try {
            List<Planet> planetas = planetServicioImpl.findPlanetasByEstrellaId(id);
            return ResponseEntity.ok(planetas);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }
}
