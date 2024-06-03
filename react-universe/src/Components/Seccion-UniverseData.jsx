export const UniverseData = () =>{

    const select = (value) => {

        const imageElement = document.getElementById('image');
        const infoElement = document.getElementById('info');

        switch (value) {
            case 'universo':
                imageElement.src = 'el universo.jpg';
                infoElement.innerHTML = 'La teoría del Big Bang postula que hace aproximadamente 13.8 mil millones de años, el universo comenzó como una singularidad extremadamente caliente y densa. En este estado inicial, toda la materia y la energía estaban concentradas en un punto infinitesimal, con una temperatura y densidad inimaginables<br><br>' +

                    'En un instante de tiempo increíblemente corto, esta singularidad experimentó una expansión explosiva y violenta, dando inicio al universo tal como lo conocemos. Durante los primeros momentos después del Big Bang, el universo era un mar de partículas subatómicas en constante movimiento y colisión<br><br>' +

                    'A medida que el universo se expandía y enfriaba, las partículas subatómicas comenzaron a unirse para formar átomos de hidrógeno y helio, los elementos más simples. Con el tiempo, estas nubes primordiales de gas se condensaron bajo la influencia de la gravedad, formando estrellas y galaxias.';
                break;

            case 'estrellas':
                imageElement.src = '\estrella-datos.jpg';
                infoElement.innerHTML = 'Las estrellas son esferas gigantes de gas caliente, principalmente hidrógeno y helio, que generan luz y calor a través de procesos de fusión nuclear en sus núcleos. Este proceso convierte hidrógeno en helio, liberando una enorme cantidad de energía que hace que las estrellas brillen.<br><br>' +
                    'Las estrellas varían en tamaño, masa y temperatura, lo que influye en su color y luminosidad. Las estrellas más masivas y calientes pueden ser de color azul o blanco, mientras que las estrellas menos masivas y más frías tienden a ser rojas o anaranjadas.<br><br>' +
                    'Las estrellas nacen en nubes de gas y polvo llamadas nebulosas. A lo largo de millones o incluso miles de millones de años, atraviesan diferentes fases de evolución, como la secuencia principal, la fase de gigante roja y, dependiendo de su masa, pueden terminar como enanas blancas, estrellas de neutrones o agujeros negros.';
                break;

            case 'estrellas-tipos':
                imageElement.src = 'sol-estrellas-gigantes.jpg';
                infoElement.innerHTML = '<span style="color: orange; font-weight: bold;">Estrella de secuencia principal</span>: Las estrellas de secuencia principal son las más comunes y pasan la mayor parte de su vida en esta fase, fusionando hidrógeno en helio en sus núcleos. Ejemplo: Nuestro Sol es una estrella de secuencia principal de tipo espectral G.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Gigante roja</span>: Las gigantes rojas son estrellas que han agotado el hidrógeno en sus núcleos y han comenzado a fusionar helio y otros elementos en capas externas, expandiéndose y enfriándose. Ejemplo: Betelgeuse en la constelación de Orión es una gigante roja.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Enana blanca</span>: Las enanas blancas son remanentes densos de estrellas que han agotado su combustible nuclear y han expulsado sus capas externas, dejando atrás un núcleo caliente y compacto. Ejemplo: Sirio B, la compañera de la estrella Sirio, es una enana blanca.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Estrella de neutrones</span>: Las estrellas de neutrones son núcleos extremadamente densos de estrellas masivas que han explotado como supernovas. Están compuestas casi en su totalidad por neutrones. Ejemplo: La estrella de neutrones en el centro de la Nebulosa del Cangrejo es conocida como el púlsar del Cangrejo.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Supergigante</span>: Las supergigantes son estrellas extremadamente masivas y luminosas, con tamaños que pueden ser cientos de veces el diámetro del Sol. Son relativamente raras y tienen vidas cortas en términos astronómicos. Ejemplo: Rigel en la constelación de Orión es una supergigante azul.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Enana marrón</span>: Las enanas marrones son objetos subestelares que no tienen suficiente masa para iniciar la fusión de hidrógeno en sus núcleos. A menudo se consideran el eslabón entre las estrellas y los planetas gigantes. Ejemplo: La enana marrón Gliese 229B, en el sistema Gliese 229, es un ejemplo bien conocido.<br><br>' +
                    '<span style="color: orange; font-weight: bold;">Enana roja</span>: Las enanas rojas son las estrellas más pequeñas y frías de la secuencia principal, con baja masa y luminosidad. Son muy comunes y tienen vidas extremadamente largas. Ejemplo: Proxima Centauri, la estrella más cercana al Sol, es una enana roja.';
                break;

            case 'galaxias':
                imageElement.src = 'via-lactea.jpg';
                infoElement.innerHTML = 'Una galaxia es un inmenso sistema que contiene estrellas, gas, polvo y materia oscura, todos ellos vinculados por la gravedad. Las galaxias varían en tamaño, desde unos pocos miles hasta cientos de miles de años luz de diámetro, y pueden contener desde millones hasta trillones de estrellas. Además de estrellas, las galaxias también albergan sistemas planetarios, cúmulos estelares, nebulosas y agujeros negros supermasivos en sus centros.<br><br>' +
                    'Las galaxias se formaron a partir de pequeñas variaciones en la densidad del universo poco después del Big Bang. Estas variaciones actuaron como semillas, donde la gravedad comenzó a atraer y acumular materia. Con el paso del tiempo, estas acumulaciones de materia crecieron y se agruparon, dando lugar a las primeras galaxias.'
                break;
            case 'galaxias-tipos':
                imageElement.src = 'tipos-galaxia.jpg';
                infoElement.innerHTML = '<span style="color: #ba80fd; font-weight: bold;">Galaxias espirales</span>: Estas galaxias se caracterizan por un núcleo central brillante y brazos en espiral que se extienden hacia afuera desde el núcleo. Los brazos en espiral están formados por estrellas jóvenes, gas y polvo, y son regiones activas de formación estelar. Las galaxias espirales se dividen en dos subtipos: las galaxias espirales normales, que tienen brazos bien definidos, y las galaxias espirales barradas, que tienen una barra de estrellas atravesando el núcleo central antes de que los brazos en espiral se curven hacia afuera. Ejemplo: La Vía Láctea es una galaxia espiral barrada.<br><br>' +
                    '<span style="color: #ba80fd; font-weight: bold;">Galaxias elípticas</span>: Estas galaxias tienen una forma redondeada u ovalada y carecen de la estructura en espiral de las galaxias espirales. Las galaxias elípticas están compuestas principalmente por estrellas viejas y contienen muy poco gas y polvo, lo que significa que hay poca o ninguna formación de nuevas estrellas. Estas galaxias varían en tamaño desde enanas, con solo unos pocos millones de estrellas, hasta gigantes, con billones de estrellas. Ejemplo: M87 es una galaxia elíptica gigante en el centro del cúmulo de Virgo.<br><br>' +
                    '<span style="color: #ba80fd; font-weight: bold;">Galaxias lenticulares</span>: Las galaxias lenticulares tienen un disco como las galaxias espirales, pero carecen de los brazos espirales prominentes. Tienen una estructura que se asemeja a una lente, con un núcleo central rodeado por un disco estelar. Contienen una mezcla de estrellas viejas y jóvenes, y tienen cantidades moderadas de gas y polvo. Las galaxias lenticulares actúan como una especie de transición entre las galaxias espirales y elípticas. Ejemplo: NGC 5866 es una galaxia lenticular conocida también como M102.<br><br>' +
                    '<span style="color: #ba80fd; font-weight: bold;">Galaxias irregulares</span>: Estas galaxias no tienen una forma definida y presentan una apariencia caótica. A menudo tienen grandes cantidades de gas y polvo, y son sitios de intensa formación estelar. Las galaxias irregulares suelen ser más pequeñas que las espirales y elípticas y pueden haber sido perturbadas por interacciones gravitacionales con otras galaxias. Ejemplo: La Gran Nube de Magallanes es una galaxia irregular que orbita nuestra Vía Láctea y es visible desde el hemisferio sur.'
                break;

            case 'agujerosN':
                imageElement.src = 'black-hole.webp';
                infoElement.innerHTML = 'Los agujeros negros son regiones del espacio donde la gravedad es tan fuerte que nada, ni siquiera la luz, puede escapar de su atracción. Se forman cuando una cantidad suficiente de masa se concentra en un espacio pequeño, creando un campo gravitacional extremadamente intenso.<br><br>' +

                    'El límite alrededor de un agujero negro donde la velocidad de escape iguala la velocidad de la luz se llama horizonte de sucesos. Una vez que algo cruza este horizonte, no puede regresar. En el centro del agujero negro se encuentra la singularidad, un punto de densidad infinita donde las leyes de la física como las conocemos dejan de aplicarse.'
                break;

            case 'agujerosN-tipos':
                imageElement.src = 'agujero-negro.jpg';
                infoElement.innerHTML = '<span style="color: #fd1105; font-weight: bold;">Agujeros negros de masa estelar</span>: Se forman a partir del colapso gravitacional de estrellas masivas al final de su ciclo de vida, generalmente tras una supernova. Estos agujeros negros tienen masas que varían desde unas pocas hasta decenas de veces la masa del Sol. Ejemplo: Cygnus X-1, un sistema binario donde un agujero negro de masa estelar está en órbita con una estrella compañera.<br><br>' +

                    '<span style="color: #fd1105; font-weight: bold;">Agujeros negros supermasivos</span>: Se encuentran en los centros de la mayoría de las galaxias, incluyendo la nuestra. Tienen masas que oscilan entre millones y miles de millones de veces la masa del Sol. Su origen exacto es aún objeto de investigación, pero se cree que se formaron a partir de la fusión de agujeros negros más pequeños y la acumulación de gran cantidad de materia. Ejemplo: Sagitario A*, el agujero negro supermasivo en el centro de la Vía Láctea.<br><br>' +

                    '<span style="color: #fd1105; font-weight: bold;">Agujeros negros intermedios</span>: Tienen masas entre las de los agujeros negros de masa estelar y los agujeros negros supermasivos, típicamente entre cientos y miles de veces la masa del Sol. Son más difíciles de detectar y estudiar, y se cree que se forman a partir de la fusión de agujeros negros más pequeños o de la colisión de estrellas masivas en cúmulos estelares densos. Ejemplo: HLX-1, un candidato a agujero negro intermedio en una galaxia cercana.<br><br>' +

                    '<span style="color: #fd1105; font-weight: bold;">Micro agujeros negros</span>: Son agujeros negros hipoteticos de tamaños minúsculos, como un grano de arena de playa, pero con una masa similar a la de nuestro propio Sol. Podrían haberse formado en las primeras etapas del universo debido a densidades extremadamente altas o podrían generarse en experimentos de alta energía como los realizados en aceleradores de partículas. Si existen, se espera que los micro agujeros negros se evaporen rápidamente mediante la radiación de Hawking.'
                break;

            case 'exoplanetas':
                imageElement.src = '\exoplaneta.jpg';
                infoElement.innerHTML = 'Un planeta extrasolar o exoplaneta es un planeta que orbita una estrella diferente al Sol y que, por lo tanto, no pertenece al sistema solar. La primera detección confirmada fue en 1992, con el descubrimiento de varios planetas de masa terrestre orbitando el "púlsar Lich".' +
                    ' La mayoría de los exoplanetas descubiertos son gigantes gaseosos igual o más masivos que Júpiter, pero también hay planetas extrasolares rocosos como la Tierra. La detección de estos cuerpos es posible gracias a diversas técnicas, entre las cuales las mas comunes son el método de tránsito y el método de la velocidad radial.<br><br>' +
                    '-<span style="color: #73c065; font-weight: bold;">Método de tránsitos</span>: Este método observa la disminución del brillo de una estrella cuando un planeta pasa frente a ella. Utilizado por telescopios espaciales como Kepler y TESS.<br><br>' +
                    '-<span style="color: #73c065; font-weight: bold;">Método de la velocidad radial</span>: Este método mide el ligero bamboleo de una estrella debido a la atracción gravitacional de un planeta. El bamboleo causa un desplazamiento en el espectro de la luz estelar, conocido como el efecto Doppler.';
                break;

            case 'exoplanetas-tipos':
                imageElement.src = '\exoplanetas-tipos.jpeg';
                infoElement.innerHTML = '<span style="color: #73c065; font-weight: bold;">Gigantes gaseosos</span>: Los gigantes gaseosos son planetas grandes y masivos compuestos principalmente de hidrógeno y helio, similares a Júpiter y Saturno en nuestro sistema solar. Ejemplo: HD 189733b, un gigante gaseoso conocido por su color azul profundo debido a las partículas en su atmósfera.<br><br>' +

                    '<span style="color: #73c065; font-weight: bold;">Supertierras</span>: Las supertierras son exoplanetas con una masa mayor que la de la Tierra, pero significativamente menor que la de los gigantes gaseosos. Estos planetas pueden ser rocosos o tener una envoltura gaseosa significativa. Ejemplo: Kepler-452b, una supertierra que orbita en la zona habitable de su estrella.<br><br>' +

                    '<span style="color: #73c065; font-weight: bold;">Neptunos calientes</span>: Estos exoplanetas son similares en tamaño y composición a Neptuno y Urano, pero orbitan mucho más cerca de sus estrellas, lo que les confiere temperaturas extremadamente altas. Ejemplo: Gliese 436b, un Neptuno caliente que tiene una atmósfera de hidrógeno y helio.<br><br>' +

                    '<span style="color: #73c065; font-weight: bold;">Júpiteres calientes</span>: Son gigantes gaseosos que orbitan muy cerca de sus estrellas, resultando en altas temperaturas en su atmósfera. Ejemplo: 51 Pegasi b, el primer exoplaneta descubierto alrededor de una estrella similar al Sol.<br><br>' +

                    '<span style="color: #73c065; font-weight: bold;">Planetas oceánicos</span>: Estos exoplanetas tienen superficies cubiertas por vastos océanos de agua o de otros líquidos. Aunque son teóricos y aún no confirmados, se cree que podrían existir.<br><br>' +

                    '<span style="color: #73c065; font-weight: bold;">Planetas terrestres</span>: Planetas rocosos similares a la Tierra en composición y tamaño, pero orbitando otras estrellas. Ejemplo: Proxima Centauri b, un planeta terrestre en la zona habitable de la estrella más cercana a nuestro sistema solar.';
                break;

            case 'nebulosas':
                imageElement.src = 'nebulosa.webp';
                infoElement.innerHTML = 'Las nebulosas son vastas nubes de gas y polvo en el espacio interestelar, desempeñando un papel crucial en el ciclo de vida de las estrellas y las galaxias. Compuestas principalmente de hidrógeno, helio, y otros elementos como el oxígeno y el carbono, las nebulosas se forman a partir de la materia expulsada por estrellas moribundas o por colisiones entre nubes de gas.<br><br>' +

                    'Estas estructuras pueden abarcar cientos de años luz y tienen una densidad muy baja. Las nebulosas son fundamentales para la formación de nuevas estrellas: la gravedad dentro de la nebulosa puede causar que el gas y el polvo se agrupen en núcleos densos que eventualmente colapsan y comienzan a fusionarse, naciendo así nuevas estrellas.<br><br>' +

                    'Las nebulosas pueden ser observadas en varias longitudes de onda, desde la luz visible hasta el infrarrojo y el radio, permitiendo a los astrónomos estudiar su composición, estructura y los procesos dinámicos que ocurren en ellas. Este estudio es esencial para comprender mejor la evolución del universo.'
                break;

            case 'nebulosas-tipos':
                imageElement.src = 'nebulosa-tipos.jpg';
                infoElement.innerHTML = '<span style="color: #d67cd1; font-weight: bold;">Nebulosas de Emisión</span>: Estas nebulosas brillan intensamente debido a la ionización de su gas por la radiación ultravioleta de estrellas jóvenes y calientes. Este proceso hace que el gas emita luz visible. Ejemplo: La Nebulosa de Orión, una de las nebulosas de emisión más conocidas, ubicada a unos 1,344 años luz de la Tierra.<br><br>' +

                    '<span style="color: #d67cd1; font-weight: bold;">Nebulosas de Reflexión</span>: Estas nebulosas no emiten luz propia, sino que reflejan la luz de estrellas cercanas. Están compuestas de polvo que dispersa la luz, generalmente de color azul debido a la dispersión de la luz. Ejemplo: La Nebulosa Cabeza de Caballo en la constelación de Orión, que refleja la luz de estrellas cercanas.<br><br>' +

                    '<span style="color: #d67cd1; font-weight: bold;">Nebulosas Oscuras</span>: Estas nebulosas son nubes densas de gas y polvo que bloquean la luz de las estrellas y nebulosas detrás de ellas. Aparecen como regiones oscuras en el cielo. Ejemplo: La Nebulosa del Saco de Carbón, visible en el hemisferio sur cerca de la constelación de la Cruz del Sur.<br><br>' +

                    '<span style="color: #d67cd1; font-weight: bold;">Nebulosas Planetarias</span>: Formadas cuando una estrella similar al Sol expulsa sus capas exteriores al final de su vida, estas nebulosas brillan debido a la radiación ultravioleta de la estrella moribunda que ioniza el gas expulsado. Ejemplo: La Nebulosa del Anillo en la constelación de Lyra, conocida por su forma de anillo distintiva.<br><br>' +

                    '<span style="color: #d67cd1; font-weight: bold;">Restos de Supernova</span>: Estas nebulosas son los restos dispersos de una explosión de supernova, la muerte catastrófica de una estrella masiva. La energía liberada en la explosión ioniza el gas circundante, haciéndolo brillar. Ejemplo: La Nebulosa del Cangrejo, un remanente de supernova en la constelación de Tauro, observable a través de telescopios.'
                break;

        }
    }
     


    return(
        <>
        <section id="container-universeData" className="container-universeData">
                <h2 className="title subTitle-universeData subTitle" onClick={() => select('universo')}>El Universo</h2>
                <div className="buttons">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle personalized" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Estrellas
                        </button>
                        <ul className="dropdown-menu personalized-menu">
                            <li><a onClick={() => select('estrellas')} className="dropdown-item personalized-menu" href="#card-selected">¿Que son?</a></li>
                            <li><a onClick={() => select('estrellas-tipos')} className="dropdown-item personalized-menu " href="#card-selected">¿Que tipos hay?</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle personalized" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Galaxias
                        </button>
                        <ul className="dropdown-menu personalized-menu">
                            <li><a onClick={() => select('galaxias')} className="dropdown-item personalized-menu" href="#card-selected">¿Que son?</a></li>
                            <li><a onClick={() => select('galaxias-tipos')} className="dropdown-item personalized-menu" href="#card-selected">¿Que tipos hay?</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle personalized" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Agujeros Negros
                        </button>
                        <ul className="dropdown-menu personalized-menu">
                            <li><a onClick={() => select('agujerosN')} className="dropdown-item personalized-menu" href="#card-selected">¿Que son?</a></li>
                            <li><a onClick={() => select('agujerosN-tipos')} className="dropdown-item personalized-menu" href="#card-selected">¿Que tipos hay?</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle personalized" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Exoplanetas
                        </button>
                        <ul className="dropdown-menu personalized-menu">
                            <li><a onClick={() => select('exoplanetas')} className="dropdown-item personalized-menu" href="#card-selected">¿Que son?</a></li>
                            <li><a onClick={() => select('exoplanetas-tipos')} className="dropdown-item personalized-menu" href="#card-selected">¿Que tipos hay?</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle personalized" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nebulosas
                        </button>
                        <ul className="dropdown-menu personalized-menu">
                            <li><a onClick={() => select('nebulosas')} className="dropdown-item personalized-menu" href="#card-selected">¿Que son?</a></li>
                            <li><a onClick={() => select('nebulosas-tipos')} className="dropdown-item personalized-menu" href="#card-selected">¿Que tipos hay?</a></li>
                        </ul>
                    </div>
                </div>

                <div id="card-selected" className="card-selected">
                    <div className="img-card">
                        <img id="image" src="el universo.jpg" alt="Imagen" />
                    </div>
                    <div className="info">
                        <p id="info">La teoría del Big Bang postula que hace aproximadamente 13.8 mil millones de años, el universo comenzó como una singularidad extremadamente caliente y densa. En este estado inicial, toda la materia y la energía estaban concentradas en un punto infinitesimal, con una temperatura y densidad inimaginables
                            <br /> <br />
                            En un instante de tiempo increíblemente corto, esta singularidad experimentó una expansión explosiva y violenta, dando inicio al universo tal como lo conocemos. Durante los primeros momentos después del Big Bang, el universo era un mar de partículas subatómicas en constante movimiento y colisión
                            <br /> <br />
                            A medida que el universo se expandía y enfriaba, las partículas subatómicas comenzaron a unirse para formar átomos de hidrógeno y helio, los elementos más simples. Con el tiempo, estas nubes primordiales de gas se condensaron bajo la influencia de la gravedad, formando estrellas y galaxias.</p>
                    </div>  {/* solucionar error de que al hacer click en las cards te devuelve a la parte superior de la pagina */}
                </div>
            </section>
        </>
    );
}