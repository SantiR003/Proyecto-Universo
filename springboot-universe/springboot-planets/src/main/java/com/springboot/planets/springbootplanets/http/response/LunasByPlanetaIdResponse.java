package com.springboot.planets.springbootplanets.http.response;

import java.util.List;

import com.springboot.planets.springbootplanets.DTO.LunaDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class LunasByPlanetaIdResponse {

    private String nombre;
    private String categoria; /* Planeta, Estrella, Satelite... */
    private String tipoDePlaneta; /* Terrestre, Gigante Gaseoso, Helado... */
    private String masa;
    private String radio;
    private Double densidad;
    private Double temperatura;
    private Double velocidad;
    private Double periodoDeRotacion;
    private Double periodoOrbital;
    private String edad;
    private Double gravedad;
    private Integer estrellaId;
    private Integer orbita;

    List<LunaDTO> Lunas;

}
