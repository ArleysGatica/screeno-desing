import React from 'react';
import './black.css';

const BlackCard = ({ Arraytext }) => {
  console.log(Arraytext);

  return (
    <>
      <main>
        <div>
          <div className="black-card">
            <div className="black-card-text">
              <h2>We help you grow</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlackCard;