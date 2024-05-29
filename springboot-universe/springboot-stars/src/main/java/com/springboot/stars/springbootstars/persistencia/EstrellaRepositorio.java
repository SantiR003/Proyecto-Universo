package com.springboot.stars.springbootstars.persistencia;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springboot.stars.springbootstars.entidades.Estrella;

@CrossOrigin(origins = "http://localhost:5173")
@Repository
public interface EstrellaRepositorio extends CrudRepository<Estrella, Long> {

}
