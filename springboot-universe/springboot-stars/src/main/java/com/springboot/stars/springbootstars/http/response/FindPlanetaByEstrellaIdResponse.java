package com.springboot.stars.springbootstars.http.response;

import java.util.List;

import com.springboot.stars.springbootstars.DTO.PlanetDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FindPlanetaByEstrellaIdResponse {

    private String nombre;
    private String categoria; /* Planeta, Estrella, Luna... */
    private String tipoDeEstrella; /* Enana amarilla, Gigante Roja, Enana marron... */
    private String masa;
    private String radio;
    private String distanciaALaTierra;
    private Double densidad;
    private Double temperatura;
    private Double velocidad;
    private Double periodoDeRotacion;
    private Double periodoOrbital;
    private String edad;
    private Double gravedad;
    private Integer orbita;

    List<PlanetDTO> planetas;
}
