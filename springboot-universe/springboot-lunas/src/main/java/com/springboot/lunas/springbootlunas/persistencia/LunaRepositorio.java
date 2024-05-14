package com.springboot.lunas.springbootlunas.persistencia;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.lunas.springbootlunas.entidades.Luna;

@Repository
public interface LunaRepositorio extends CrudRepository<Luna, Long> {

    @Query("select l from Luna l where l.planetaId = :planetaId")
    List<Luna> findLunasByPlanetaId(Long planetaId);

}
