package com.springboot.lunas.springbootlunas.servicio;

import java.util.List;

import com.springboot.lunas.springbootlunas.entidades.Luna;

public interface LunaServicio {

    List<Luna> findAll();

    Luna findById(Long id);

    List<Luna> findLunasByPlanetaId(Long planetaId);
}
