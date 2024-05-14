package com.springboot.lunas.springbootlunas.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.lunas.springbootlunas.entidades.Luna;
import com.springboot.lunas.springbootlunas.servicio.LunaServicio;

@RestController
@RequestMapping("/api/lunas")
public class LunaControlador {

    @Autowired
    LunaServicio lunaServicio;

    @GetMapping("/all")
    public ResponseEntity<?> findAll() {
        try {
            List<Luna> lunas = lunaServicio.findAll();
            return ResponseEntity.ok(lunas);
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
            Luna luna = lunaServicio.findById(id);
            return ResponseEntity.ok(luna);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

    @GetMapping("/findByPlanetaId/{id}")
    public ResponseEntity<?> findByPlanetaId(@PathVariable Long id) {
        try {
            List<Luna> lunas = lunaServicio.findLunasByPlanetaId(id);
            return ResponseEntity.ok(lunas);
        } catch (DataAccessException e) {
            String mensajeError = "Error al acceder a datos: " + e.getMessage();
            return ResponseEntity.internalServerError().body(mensajeError);
        } catch (Exception e) {
            String mensajeError = "Error desconocido: " + e.getMessage();
            return ResponseEntity.badRequest().body(mensajeError);
        }
    }

}
