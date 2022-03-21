import './Footer.css';
import serviSVG from '../../Asset/Services';

const arrayfooter = [
  {
    id: 1,
    name: '2715 Ash Dr. San Jose, South Dakota 83475',
    img: serviSVG('ubicacion')
  },
  {
    id: 2,
    name: '(219) 555-0114',
    img: serviSVG('call')
  },
  {
    id: 3,
    name: 'info@screeno.com',
    img: serviSVG('sms')
  },
]

const Footer = () => {
  return (
    <>
      <footer>
        <article className="footer-container">
          <section className='item'>
            <h2 >Scr<strong>ee</strong>no</h2>
            <p>Streaming and Video platform</p>
            <picture className='images'>
              <img src={serviSVG('insta')} alt="" />
              <img src={serviSVG('facebook')} alt="" />
            </picture>
          </section>
          <span>
            <p id='title__2'>Contact info</p>
            {
              arrayfooter.map(item => (
                <div className='items' key={item.id}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </div>
              ))
            }
          </span>
          <span className='item__buttons'>
            <p id='title__2'>Get in touch</p>
            <div className='Buttons'>
              <input type="text"
                placeholder="Your Name"
              />
              <input type="text"
                placeholder="Your Email"
              />
            </div>
            <div className='BTN__G'>
              <input type="text"
                placeholder="Your Message"
              />
              <button>Send</button>
            </div>
          </span>
        </article>
      </footer>
      <p id='footer' >©2022 Screeno Ltd, All rights reserved</p>
    </>
  );
};

export default Footer;