import { NavLink } from "react-router-dom";

export const SistemaSolar = ({valueToDetails}) =>{


    return (
     <>
      <section id="container-solarSystem" className="container-solarSystem">
                <h2 className="title subTitle">El Sistema Solar</h2>
                <div className="background">
                    <div className="centering">
                        <div className="articles">
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(1,'s')}>
                            <article>
                                <figure>
                                    <img className="sol" src="\sol-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>SOL</h2>
                                    <p>
                                        El <strong>Sol</strong>, es una estrella de Tipo-G de la secuencia principal, que
                                        se encuentra en el centro del sistema solar. Se formo hace aproximadamente 4.600 millones
                                        de años a partir de una nube de gases que se encontraba en la region, donde la mayoria de la materia
                                        se acumulo y dio origen a nuestra estrella, la cual hoy en dia constituye el 99.86% de la masa del sistema solar.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(7,'p')}>
                            <article>
                                <figure>
                                    <img src="\el-planeta-mercurio_c7bafef8_1280x720-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Mercurio</h2>
                                    <p>
                                        <strong>Mercurio</strong>, el planeta más cercano al Sol en nuestro sistema solar y también el más pequeño, forma parte del grupo de planetas interiores y no cuenta con ningún satélite natural orbitándolo.
                                        Debido a su proximidad al Sol, Mercurio experimenta variaciones extremas en la temperatura de su superficie,
                                        alcanzando valores que oscilan entre los 430°C y los -180°C.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(3,'p')}>
                            <article>
                                <figure>
                                    <img src="\Venus_globe-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Venus</h2>
                                    <p>
                                        <strong>Venus</strong>, es el segundo planeta mas cercano al Sol y el tercero mas pequeño, seguido de Mercurio y Marte.
                                        Al igual que Mercurio este cuerpo celeste no posee ningun satelite natural. Es un planeta interior el cual pese a
                                        estar mas lejos del sol que Mercurio, tiene una temperatura superficial de 463°C, siendo asi el mas caliente del sistema solar.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(1,'p')}>
                            <article>
                                <figure>
                                    <img className="tierra" src="\world-1348808__340.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Tierra</h2>
                                    <p>
                                        La <strong>Tierra</strong>, es el tercer planeta mas cercano al Sol y el mas grande de los cuatro planetas interiores.
                                        Nuestro mundo se creo hace 4.500 millones de años y posee un satelite natural el cual es la Luna. Es el hogar
                                        de millones de formas de vida incluyendo a los humanos y es el unico cuerpo astronomico donde se conoce la existencia de vida.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }}  className={'read-more'} to={'/details'} onClick={() => valueToDetails(2,'p')}>
                            <article>
                                <figure>
                                    <img className="marte" src="\Schiaparelli_Hemisphere_Enhanced-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Marte</h2>
                                    <p>
                                        <strong>Marte</strong>, es el planeta interior mas alejado del Sol y segundo mas pequeño del sistema solar. Es un planeta terrestre
                                        con una atmosfera delgada y posee dos satelites naturales pequeños. Marte alberga la montaña y volcan mas grande del sistema solar,
                                        conocido como el "Monte Olimpo" con una altura de 22km, unas tres veces el "Monte Everest".
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(4,'p')}>
                            <article>
                                <figure>
                                    <img className="jupiter" src="\Jupiter-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Júpiter</h2>
                                    <p>
                                        <strong>Júpiter</strong>, es el planeta mas grande del sistema solar y el quinto mas alejado del Sol. Es un "Gigante Gaseoso" y forma parte
                                        de los denominados "Planetas Exteriores". Posee una masa 318 veces la de la tierra y un volumen 1321 veces mayor. Es el planeta
                                        mas antiguo del sistema solar, incluso mas antiguo que su propia estrella. Tiene 95 satelites natulares en orbita.

                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }}  className={'read-more'} to={'/details'} onClick={() => valueToDetails(5,'p')}>
                            <article>
                                <figure>
                                    <img className="saturno" src="\saturno-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Saturno</h2>
                                    <p>
                                        <strong>Saturno</strong>, es el sexto planeta mas alejado del sol y el segundo más grande del sistema solar.
                                        Es conocido por sus impresionantes anillos visibles desde la Tierra y es un gigante gaseoso al igual que Júpiter.
                                        Aunque su volumen es 740 veces el de la Tierra, su baja densidad significa que solo tiene 95 veces su masa.
                                        Tiene 145 satélites naturales en órbita.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }}  className={'read-more'} to={'/details'} onClick={() => valueToDetails(6,'p')}>
                            <article>
                                <figure>
                                    <img src="\Uranus-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Urano</h2>
                                    <p>
                                        <strong>Urano</strong>, es el septimo planeta del sistema solar y el tercero de mayor tamaño. Este planeta se clasifica como
                                        un "Gigante Helado" por su composicion principalmente de hielo, agua, amoníaco y metano. Posee la atmosfera planetaria mas fria del sistema solar
                                        con temperaturas minimas de -224°C. Urano tiene 27 satelites naturales conocidos.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} className={'read-more'} to={'/details'} onClick={() => valueToDetails(8,'p')}>
                            <article>
                                <figure>
                                    <img className="neptuno" src="\Neptuno-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Neptuno</h2>
                                    <p>
                                        <strong>Neptuno</strong>, es el octavo planeta mas distante del sol y el más lejano en el sistema solar.
                                        Clasificado como un "Gigante Helado" por su estructura constituida principalmente por hielo,roca y gas.
                                        Junto con Urano, comparte una composición distinta de los otros gigantes gaseosos, lo que los diferencia.
                                        Neptuno tiene 16 satélites naturales conocidos.
                                        <br />
                                    </p>
                                </div>
                            </article>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
     </>
    );
}