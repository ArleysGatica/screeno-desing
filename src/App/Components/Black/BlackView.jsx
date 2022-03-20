import React from 'react';
import './BLACK.css'
import sacso from '../../Asset/sacso.png';

const BlackView = (props) => {
  const { Arraytext, Arraytext2 } = props;
  console.log(Arraytext);

  return (
    <>
      <div className="black-card">
        <div className="black-card-text">
          <h2>We help you grow</h2>
        </div>
        <div className="black-card-map">
          {
            Arraytext.map((item, index) => {
              return (
                <div className="black-card-map-item" key={index}>
                  <div className="black-card-map-item-text">
                    <section className='uno'>
                      <h3>{item.text1}</h3>
                      <p>{item.description1}</p> <br />
                      <p>{item.down}</p>
                    </section>
                    <img src={item.img1} alt="" />
                  </div>
                  <div className="black-card-map-item-text">
                    <img src={item.img1} alt="" />
                    <section className='uno'>
                      <h3>{item.text1}</h3>
                      <p>{item.description1}</p> <br />
                      <p>{item.down1}</p>
                    </section>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default BlackView;