package com.springboot.stars.springbootstars.persistencia;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.stars.springbootstars.entidades.Estrella;

@Repository
public interface EstrellaRepositorio extends CrudRepository<Estrella, Long> {

}
