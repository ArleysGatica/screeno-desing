import React from 'react';
import './BLACK.css'
import sacso from '../../Asset/sacso.png';

const BlackView = (props) => {
  const { Arraytext } = props;
  console.log(Arraytext);

  return (
    <>
      <div className="black-card">
        <div className="black-card-text">
          <h2>We help you grow</h2>
        </div>
        <div className="black-card-map">
          {
            Arraytext.map((item) => {
              return (
                <>
                  <div className="black-card-map-text">
                    <div className='item-info'>
                      <h2>{item.text}</h2>
                      <p>{item.description}</p>
                      <button>{item.down}</button>
                    </div>


                    <img src={item.img} alt="" />
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default BlackView;