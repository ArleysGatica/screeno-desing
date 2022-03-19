import React from "react";
import './live.css';
import peke from "../../Asset/peke.jpeg";
import gran from "../../Asset/gran.jpeg";

const Live = (props) => {
  const { array } = props;

  return (
    <main className="live-main">
      <section className="Grid">
        <article className="live">
          <h1>Reach more people in real time</h1>
          <p id="lorem">
            The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno
          </p>
          <div className="live-button">
            <button id="startlive">Start Free Trail</button>
            <button id="loginlive">Login</button>
          </div>
        </article>
        <article className="live__2">
          <div className="peke">
            <img src={peke} alt="peke" />
          </div>
          <aside className="live__aside">
            <div className="container">
              <div className="circulo" />
              <p id="live">Live</p>
            </div>
          </aside>
          <div className="gran">
            <img src={gran} alt="" />
          </div>
        </article>
      </section>
      <div className="map_svg">
        {
          array.map((item) => {
            return (
              <div className="live__3" key={item.id}>
                <div className="live__3-svg">
                  <img src={item.SVG} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  );
};

export default Live;