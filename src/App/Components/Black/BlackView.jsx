import React from 'react';
import serviSVG from '../../Asset/Services';
import './BLACK.css'

const BlackView = (props) => {
  const { Arraytext, array } = props;
  console.log("🚀 ~", Arraytext, array)

  return (
    <>
      <main className="black-card">
        <div className="black-card-text">
          <h2>We help you grow</h2>
        </div>
        <article className="black-card-map">
          {Arraytext.map((item) => {
            return (
              <section className="card-map-item" key={item.id}>
                <div className="card-map-item-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p id='startBlack'>
                    {item.down}
                    <img src={item.SVG} alt="" />
                  </p>
                </div>
                <span className='card-img'>
                  <ul className='item-list'>
                    <li id='initial'>Donate<p id='number'>45$</p></li>
                    <li id='medion'>Donate<p id='numberM'>45$</p></li>
                    <li id='initial'>Donate<p id='number'>45$</p></li>
                  </ul>
                  <img src={item.img} alt="img" />
                </span>
              </section>
            )
          })}
          <div>
            {
              array.map((item) => {
                return (
                  <section className="card-map-item" key={item.id}>
                    <div className='card-images'>
                      <img src={item.img} alt="img" />
                      <div className='gmail'>
                        <img src={item.Gmail} alt="" />
                      </div>
                    </div>
                    <div className="card-map-item-text">
                      <h2>{item.text}</h2>
                      <p>{item.description}</p>
                      <p id='startBlack'>
                        {item.down}
                        <img src={item.SVG} alt="" />
                      </p>
                    </div>
                  </section>
                )
              })}
          </div>
        </article>
        <span className='title_black'>
          <h2>Start your own business today</h2>
          <p id='sub__title__black'>Consistent quality and experience across all platforms and devices.</p>
        </span>
        <div className="black-button">
          <button id="start--Black">Get Start</button>
          <button id="login--Black">Login</button>
        </div>
        <picture className="BLACK">
          <div className="COOK">
            <img src={serviSVG('cook')} alt="peke" />
          </div>
          <div className="COCINERO">
            <img src={serviSVG('cocinero')} alt="" />
          </div>
        </picture>
      </main>
    </>
  )
}

export default BlackView;