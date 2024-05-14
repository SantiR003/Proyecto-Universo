package com.springboot.lunas.springbootlunas.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "lunas")
public class Luna {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String categoria; /* Planeta, Estrella, Luna... */

    @Column(name = "tipo_de_cuerpo_celeste")
    private String tipoDeCuerpoCeleste; /* Satelite Natural, Terrestre, Gigante Gaseoso, Helado... */

    private String masa;
    private String radio;
    @Column(name = "distancia_a_la_tierra")
    private String distanciaALaTierra;
    private Double densidad;
    private Double temperatura;
    private Double velocidad;
    @Column(name = "periodo_de_rotacion")
    private Double periodoDeRotacion;
    @Column(name = "periodo_orbital")
    private Double periodoOrbital;
    private String edad;
    private Double gravedad;
    @Column(name = "planeta_id")
    private Integer planetaId;
}
