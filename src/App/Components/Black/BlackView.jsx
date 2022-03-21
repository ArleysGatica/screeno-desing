import React from 'react';
import './BLACK.css'

const BlackView = (props) => {
  const { Arraytext, array } = props;
  console.log("🚀 ~", Arraytext, array)

  return (
    <>
      <div className="black-card">
        <div className="black-card-text">
          <h2>We help you grow</h2>
        </div>
        <div className="black-card-map">
          {Arraytext.map((item) => {
            return (
              <div className="card-map-item" key={item.id}>
                <div className="card-map-item-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p id='startBlack'>
                    {item.down}
                    <img src={item.SVG} alt="" />
                  </p>
                </div>
                <div>
                  <img src={item.img} alt="img" />
                </div>
              </div>
            )
          })}
          <div>
            {
              array.map((item) => {
                return (
                  <div className="card-map-item" key={item.id}>
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
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlackView;