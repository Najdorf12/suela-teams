/*
import escudo1 from "/Aleman.png";
import escudo2 from "/Cementista.png";
import escudo4 from "/COP.png";
import logo from "/logo.png";
import logo2 from "/logo2.png";
 */

import Voucher from "./components/Voucher/Voucher";
import escudo3 from "/IndepteRiv.png";
import silueta from "/player2.jpg";
import logo3 from "/logo3.png";
import { useState } from "react";

const App = () => {
  const [plantilla, setPlantilla] = useState(false);
  const handleClick = () => {
    setPlantilla(true);
  };
  return (
    <>
      <main className="teams-wrapper">
        <button className="btn-back">
          {" "}
          <i className="bx bx-left-arrow-circle"></i>
        </button>
        <section className="team-box">
          <div className="team-name">
            <h2>Independiente Rivadavia</h2>
          </div>
          <picture className="img-escudo">
            <img src={escudo3} alt="" />
          </picture>
          <article className="team-info">
            <h4>DATOS DEL CLUB</h4>
            <ul className="club-details">
              <li>
                <i className="bx bx-copyright"></i>Nombre Completo: Club
                Sportivo Independiente Rivadavia
              </li>
              <li>
                <i className="bx bx-tag-alt"></i>Fecha de Fundación: 3 de Agosto
                de 1902
              </li>
              <li>
                <i className="bx bx-football"></i>Estadio: Bautista Gargantini
              </li>
              <li>
                <i className="bx bx-current-location"></i>Dirección: Av.
                Boulogne Sur Mer 688, Mendoza, Argentina.
              </li>
            </ul>
            <button className="btn-team" onClick={handleClick}>
              Plantilla
            </button>
          </article>
        </section>
      </main>
      { plantilla ? (
        <>
          <section className="plantilla-wrapper">
            <h6>ARQUEROS</h6>
            <div class="grid">
              <figure class="effect-marley">
                <img src={silueta} alt="img11" />
                <figcaption>
                  <h2>
                    Philippe <span>Coutinho</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Joshua <span>Kimmich</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Oliver <span>Giroud</span>
                  </h2>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="plantilla-wrapper">
            <h6>ALA</h6>
            <div class="grid">
              <figure class="effect-marley">
                <img src={silueta} alt="img11" />
                <figcaption>
                  <h2>
                    Philippe <span>Coutinho</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Joshua <span>Kimmich</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Oliver <span>Giroud</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Paulo <span>Dybala</span>
                  </h2>
                </figcaption>
              </figure>
              <figure class="effect-marley">
                <img src={silueta} alt="img12" />
                <figcaption>
                  <h2>
                    Pablo <span>Gaviria</span>
                  </h2>
                </figcaption>
              </figure>
            </div>
          </section>
          <footer>
            <img src={logo3} alt="" />
          </footer>
        </>
      ): null
    }
   <Voucher></Voucher>
    </>
  );
};
export default App;
