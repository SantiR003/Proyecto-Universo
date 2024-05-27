package com.springboot.planets.springbootplanets.entidades;

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
@Table(name = "planets")
public class Planet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String categoria; /* Planeta, Estrella, Satelite... */

    @Column(name = "tipo_de_planeta")
    private String tipoDePlaneta; /* Terrestre, Gigante Gaseoso, Helado... */

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
    @Column(name = "estrella_id")
    private Integer estrellaId;
    private Integer orbita;
    @Column(name = "model_url")
    private String modelUrl;
    @Column(name = "model_compare_url")
    private String modelCompareUrl;
    @Column(name = "image_url")
    private String imageURL;

}
