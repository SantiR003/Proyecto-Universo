package com.springboot.stars.springbootstars.entidades;

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
@Table(name = "estrellas")
public class Estrella {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String categoria; /* Planeta, Estrella, Luna... */

    @Column(name = "tipo_de_estrella")
    private String tipoDeEstrella; /* Enana amarilla, Gigante Roja, Enana marron... */

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
    private Integer orbita;
}
