package com.springboot.stars.springbootstars.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.stars.springbootstars.entidades.Estrella;
import com.springboot.stars.springbootstars.http.response.FindPlanetaByEstrellaIdResponse;
import com.springboot.stars.springbootstars.servicios.EstrellaServicio;

@RestController
@RequestMapping("/api/stars")
public class EstrellaControlador {

    @Autowired
    EstrellaServicio estrellaServicio;

    @GetMapping("/all")
    public ResponseEntity<?> findAll() {
        try {
            List<Estrella> estrellas = estrellaServicio.findAll();
            return ResponseEntity.ok(estrellas);
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
            Estrella estrella = estrellaServicio.findById(id);
            return ResponseEntity.ok(estrella);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

    @GetMapping("/findPlanetaByEstrellaId/{id}")
    public ResponseEntity<?> findPlanetaByEstrellaId(@PathVariable Long id) {
        try {
            FindPlanetaByEstrellaIdResponse sistema = estrellaServicio.findPlanetaByEstrellaIdResponse(id);
            return ResponseEntity.ok(sistema);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

}
