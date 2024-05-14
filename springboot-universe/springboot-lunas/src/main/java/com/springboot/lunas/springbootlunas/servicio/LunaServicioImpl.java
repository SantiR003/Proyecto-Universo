package com.springboot.lunas.springbootlunas.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.lunas.springbootlunas.entidades.Luna;
import com.springboot.lunas.springbootlunas.persistencia.LunaRepositorio;

@Service
public class LunaServicioImpl implements LunaServicio {

    @Autowired
    LunaRepositorio lunaRepositorio;

    @Transactional(readOnly = true)
    @Override
    public List<Luna> findAll() {
        return (List<Luna>) lunaRepositorio.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Luna findById(Long id) {
        return lunaRepositorio.findById(id).orElseThrow();
    }

    @Transactional(readOnly = true)
    @Override
    public List<Luna> findLunasByPlanetaId(Long planetaId) {
        return lunaRepositorio.findLunasByPlanetaId(planetaId);
    }

}
