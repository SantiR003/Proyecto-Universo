package com.springboot.planets.springbootplanets.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LunaDTO {
    private String nombre;
    private String categoria; /* Planeta, Estrella, Luna... */
    private String tipoDeCuerpoCeleste; /* Satelite Natural, Terrestre, Gigante Gaseoso, Helado... */
    private String masa;
    private String radio;
    private Double densidad;
    private Double temperatura;
    private Double velocidad;
    private Double periodoDeRotacion;
    private Double periodoOrbital;
    private String edad;
    private Double gravedad;
    private Integer planetaId;
}
