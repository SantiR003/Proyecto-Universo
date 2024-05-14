package com.springboot.stars.springbootstars.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlanetDTO {

    private String nombre;
    private String categoria; /* Planeta, Estrella, Satelite... */
    private String tipoDePlaneta; /* Terrestre, Gigante Gaseoso, Helado... */
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
    private Integer estrellaId;
    private Integer orbita;
}
